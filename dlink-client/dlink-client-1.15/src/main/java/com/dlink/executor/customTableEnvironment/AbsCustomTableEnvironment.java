package com.dlink.executor.customTableEnvironment;

import com.dlink.executor.CustomTableEnvironment;
import com.dlink.result.SqlExplainResult;
import org.apache.flink.api.common.RuntimeExecutionMode;
import org.apache.flink.api.dag.Transformation;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.configuration.ExecutionOptions;
import org.apache.flink.configuration.PipelineOptions;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.graph.StreamGraph;
import org.apache.flink.table.api.EnvironmentSettings;
import org.apache.flink.table.api.ExplainDetail;
import org.apache.flink.table.api.TableConfig;
import org.apache.flink.table.api.TableException;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.apache.flink.table.api.bridge.java.internal.StreamTableEnvironmentImpl;
import org.apache.flink.table.catalog.CatalogManager;
import org.apache.flink.table.catalog.FunctionCatalog;
import org.apache.flink.table.delegation.Executor;
import org.apache.flink.table.delegation.Planner;
import org.apache.flink.table.module.ModuleManager;
import org.apache.flink.table.operations.ExplainOperation;
import org.apache.flink.table.operations.ModifyOperation;
import org.apache.flink.table.operations.Operation;
import org.apache.flink.table.operations.QueryOperation;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
public abstract class AbsCustomTableEnvironment implements CustomTableEnvironment, DefaultTableEnvironmentInternal,
        DefaultStreamTableEnvironment {
    protected StreamTableEnvironment streamTableEnvironment;

    protected AbsCustomTableEnvironment() {
    }

    protected AbsCustomTableEnvironment(StreamTableEnvironment streamTableEnvironment) {
        this.streamTableEnvironment = streamTableEnvironment;
    }

    protected AbsCustomTableEnvironment(CatalogManager catalogManager,
                                        ModuleManager moduleManager,
                                        FunctionCatalog functionCatalog,
                                        TableConfig tableConfig,
                                        StreamExecutionEnvironment executionEnvironment,
                                        Planner planner,
                                        Executor executor,
                                        boolean isStreamingMode,
                                        ClassLoader userClassLoader) {
        streamTableEnvironment = new StreamTableEnvironmentImpl(catalogManager, moduleManager,
                functionCatalog,
                tableConfig, executionEnvironment, planner, executor, isStreamingMode, userClassLoader);
    }

    public StreamGraph getStreamGraphFromInserts(List<String> statements) {
        List<ModifyOperation> modifyOperations = new ArrayList();
        for (String statement : statements) {
            List<Operation> operations = getParser().parse(statement);
            if (operations.size() != 1) {
                throw new TableException("Only single statement is supported.");
            } else {
                Operation operation = operations.get(0);
                if (operation instanceof ModifyOperation) {
                    modifyOperations.add((ModifyOperation) operation);
                } else {
                    throw new TableException("Only insert statement is supported now.");
                }
            }
        }
        List<Transformation<?>> trans = getPlanner().translate(modifyOperations);
        for (Transformation<?> transformation : trans) {
            getStreamExecutionEnvironment().addOperator(transformation);
        }
        StreamGraph streamGraph = getStreamExecutionEnvironment().getStreamGraph();
        if (getConfig().getConfiguration().containsKey(PipelineOptions.NAME.key())) {
            streamGraph.setJobName(getConfig().getConfiguration().getString(PipelineOptions.NAME));
        }
        return streamGraph;
    }

    public SqlExplainResult explainSqlRecord(String statement, ExplainDetail... extraDetails) {
        SqlExplainResult record = new SqlExplainResult();
        List<Operation> operations = getParser().parse(statement);
        record.setParseTrue(true);
        if (operations.size() != 1) {
            throw new TableException("Unsupported SQL query! explainSql() only accepts a single SQL query.");
        }
        Operation operation = operations.get(0);
        if (operation instanceof ModifyOperation) {
            record.setType("Modify DML");
        } else if (operation instanceof ExplainOperation) {
            record.setType("Explain DML");
        } else if (operation instanceof QueryOperation) {
            record.setType("Query DML");
        } else {
            record.setExplain(operation.asSummaryString());
            record.setType("DDL");
        }
        record.setExplainTrue(true);
        if ("DDL".equals(record.getType())) {
            //record.setExplain("DDL语句不进行解释。");
            return record;
        }
        record.setExplain(getPlanner().explain(operations, extraDetails));
        return record;
    }

    public static CustomTableEnvironmentImpl create(StreamExecutionEnvironment executionEnvironment) {
        return new CustomTableEnvironmentImpl(StreamTableEnvironmentImpl.create(executionEnvironment,
                EnvironmentSettings.newInstance().build()));
    }

    public static CustomTableEnvironmentImpl createBatch(StreamExecutionEnvironment executionEnvironment) {
        Configuration configuration = new Configuration();
        configuration.set(ExecutionOptions.RUNTIME_MODE, RuntimeExecutionMode.BATCH);
        TableConfig tableConfig = new TableConfig();
        tableConfig.addConfiguration(configuration);
        return new CustomTableEnvironmentImpl(StreamTableEnvironmentImpl.create(executionEnvironment,
                EnvironmentSettings.newInstance().inBatchMode().build()));
    }

}
