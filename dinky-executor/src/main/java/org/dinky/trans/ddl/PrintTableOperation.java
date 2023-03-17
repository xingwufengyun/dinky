package org.dinky.trans.ddl;

import org.apache.flink.table.api.TableResult;
import org.dinky.executor.Executor;
import org.dinky.trans.AbstractOperation;
import org.dinky.trans.Operation;

public class PrintTableOperation extends AbstractOperation implements Operation {
    @Override
    public String getHandle() {
        return "Print";
    }

    @Override
    public Operation create(String statement) {
        return null;
    }

    @Override
    public TableResult build(Executor executor) {
        return null;
    }
}
