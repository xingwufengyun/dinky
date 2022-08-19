/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */


package com.dlink.metadata.driver;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.sql.SQLUtils;
import com.alibaba.druid.sql.ast.SQLStatement;
import com.dlink.assertion.Asserts;
import com.dlink.constant.CommonConstant;
import com.dlink.metadata.query.IDBQuery;
import com.dlink.metadata.result.JdbcSelectResult;
import com.dlink.model.Column;
import com.dlink.model.Schema;
import com.dlink.model.Table;
import com.dlink.model.TableType;
import com.dlink.result.SqlExplainResult;
import com.dlink.utils.LogUtil;
import com.dlink.utils.SplitUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 * AbstractJdbcDriver
 *
 * @author wenmo
 * @since 2021/7/20 14:09
 **/
public abstract class AbstractJdbcDriver extends AbstractDriver  {

    private static Logger logger = LoggerFactory.getLogger(AbstractJdbcDriver.class);

    protected Connection conn;

    private DruidDataSource dataSource;

    abstract String getDriverClass();

    @Override
    public String test() {
        Asserts.checkNotNull(config, "无效的数据源配置");
        try {
            Class.forName(getDriverClass());
            DriverManager.getConnection(config.getUrl(), config.getUsername(), config.getPassword()).close();
        } catch (Exception e) {
            logger.error("Jdbc链接测试失败！错误信息为：" + e.getMessage(), e);
            return e.getMessage();
        }
        return CommonConstant.HEALTHY;
    }

    public DruidDataSource getDataSource() throws SQLException {
        if (null == dataSource) {
            synchronized (this) {
                if (null == dataSource) {
                    this.dataSource = new DruidDataSource();
                    assembleConfig(config);
                    dataSource.init();
                }
            }
        }
        return dataSource;
    }

    public Driver setDriverConfig(DriverConfig config) {
        this.config = config;
        try {
            this.dataSource = getDataSource();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        assembleConfig(config);
        return this;
    }

    private void assembleConfig(DriverConfig config) {
        dataSource.setName(config.getName().replaceAll(":", ""));
        dataSource.setUrl(config.getUrl());
        dataSource.setDriverClassName(getDriverClass());
        dataSource.setUsername(config.getUsername());
        dataSource.setPassword(config.getPassword());
        dataSource.setValidationQuery("select 1");
        dataSource.setTestOnBorrow(false);
        dataSource.setTestWhileIdle(true);
        dataSource.setBreakAfterAcquireFailure(true);
        dataSource.setFailFast(true);
        dataSource.setInitialSize(1);
        dataSource.setMaxActive(8);
        dataSource.setMinIdle(5);
    }

    @Override
    public Driver connect() {
        try {
            Class.forName(getDriverClass());
            conn = getDataSource().getConnection();
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }
        return this;
    }

    @Override
    public boolean isHealth() {
        try {
            if (Asserts.isNotNull(conn)) {
                return !conn.isClosed();
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public void close() {
        try {
            if (Asserts.isNotNull(conn)) {
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void close(PreparedStatement preparedStatement, ResultSet results) {
        try {
            if (Asserts.isNotNull(results)) {
                results.close();
            }
            if (Asserts.isNotNull(preparedStatement)) {
                preparedStatement.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Schema> listSchemas() {
        List<Schema> schemas = new ArrayList<>();
        PreparedStatement preparedStatement = null;
        ResultSet results = null;
        String schemasSql = getDBQuery().schemaAllSql();
        try {
            preparedStatement = conn.prepareStatement(schemasSql);
            results = preparedStatement.executeQuery();
            while (results.next()) {
                String schemaName = results.getString(getDBQuery().schemaName());
                if (Asserts.isNotNullString(schemaName)) {
                    Schema schema = new Schema(schemaName);
                    schemas.add(schema);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(preparedStatement, results);
        }
        return schemas;
    }

    @Override
    public List<Table> listTables(String schemaName) {
        List<Table> tableList = new ArrayList<>();
        PreparedStatement preparedStatement = null;
        ResultSet results = null;
        IDBQuery dbQuery = getDBQuery();
        String sql = dbQuery.tablesSql(schemaName);
        try {
            preparedStatement = conn.prepareStatement(sql);
            results = preparedStatement.executeQuery();
            ResultSetMetaData metaData = results.getMetaData();
            List<String> columnList = new ArrayList<>();
            for (int i = 1; i <= metaData.getColumnCount(); i++) {
                columnList.add(metaData.getColumnLabel(i));
            }
            while (results.next()) {
                String tableName = results.getString(dbQuery.tableName());
                if (Asserts.isNotNullString(tableName)) {
                    Table tableInfo = new Table();
                    tableInfo.setName(tableName);
                    if (columnList.contains(dbQuery.tableComment())) {
                        tableInfo.setComment(results.getString(dbQuery.tableComment()));
                    }
                    tableInfo.setSchema(schemaName);
                    if (columnList.contains(dbQuery.tableType())) {
                        tableInfo.setType(results.getString(dbQuery.tableType()));
                    }
                    if (columnList.contains(dbQuery.catalogName())) {
                        tableInfo.setCatalog(results.getString(dbQuery.catalogName()));
                    }
                    if (columnList.contains(dbQuery.engine())) {
                        tableInfo.setEngine(results.getString(dbQuery.engine()));
                    }
                    if (columnList.contains(dbQuery.options())) {
                        tableInfo.setOptions(results.getString(dbQuery.options()));
                    }
                    if (columnList.contains(dbQuery.rows())) {
                        tableInfo.setRows(results.getLong(dbQuery.rows()));
                    }
                    if (columnList.contains(dbQuery.createTime())) {
                        tableInfo.setCreateTime(results.getTimestamp(dbQuery.createTime()));
                    }
                    if (columnList.contains(dbQuery.updateTime())) {
                        tableInfo.setUpdateTime(results.getTimestamp(dbQuery.updateTime()));
                    }
                    tableList.add(tableInfo);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(preparedStatement, results);
        }
        return tableList;
    }

    @Override
    public List<Column> listColumns(String schemaName, String tableName) {
        List<Column> columns = new ArrayList<>();
        PreparedStatement preparedStatement = null;
        ResultSet results = null;
        IDBQuery dbQuery = getDBQuery();
        String tableFieldsSql = dbQuery.columnsSql(schemaName, tableName);
        tableFieldsSql = String.format(tableFieldsSql, tableName);
        try {
            preparedStatement = conn.prepareStatement(tableFieldsSql);
            results = preparedStatement.executeQuery();
            ResultSetMetaData metaData = results.getMetaData();
            List<String> columnList = new ArrayList<>();
            for (int i = 1; i <= metaData.getColumnCount(); i++) {
                columnList.add(metaData.getColumnLabel(i));
            }
            while (results.next()) {
                Column field = new Column();
                String columnName = results.getString(dbQuery.columnName());
                if (columnList.contains(dbQuery.columnKey())) {
                    String key = results.getString(dbQuery.columnKey());
                    field.setKeyFlag(Asserts.isNotNullString(key) && Asserts.isEqualsIgnoreCase(dbQuery.isPK(), key));
                }
                field.setName(columnName);
                if (columnList.contains(dbQuery.columnType())) {
                    field.setType(results.getString(dbQuery.columnType()));
                }
                if (columnList.contains(dbQuery.columnComment()) && Asserts.isNotNull(results.getString(dbQuery.columnComment()))) {
                    String columnComment = results.getString(dbQuery.columnComment()).replaceAll("\"|'", "");
                    field.setComment(columnComment);
                }
                if (columnList.contains(dbQuery.isNullable())) {
                    field.setNullable(Asserts.isEqualsIgnoreCase(results.getString(dbQuery.isNullable()), dbQuery.nullableValue()));
                }
                if (columnList.contains(dbQuery.characterSet())) {
                    field.setCharacterSet(results.getString(dbQuery.characterSet()));
                }
                if (columnList.contains(dbQuery.collation())) {
                    field.setCollation(results.getString(dbQuery.collation()));
                }
                if (columnList.contains(dbQuery.columnPosition())) {
                    field.setPosition(results.getInt(dbQuery.columnPosition()));
                }
                if (columnList.contains(dbQuery.precision())) {
                    field.setPrecision(results.getInt(dbQuery.precision()));
                }
                if (columnList.contains(dbQuery.scale())) {
                    field.setScale(results.getInt(dbQuery.scale()));
                }
                if (columnList.contains(dbQuery.autoIncrement())) {
                    field.setAutoIncrement(Asserts.isEqualsIgnoreCase(results.getString(dbQuery.autoIncrement()), "auto_increment"));
                }
                field.setJavaType(getTypeConvert().convert(field));
                columns.add(field);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(preparedStatement, results);
        }
        return columns;
    }

    @Override
    public List<Column> listColumnsSortByPK(String schemaName, String tableName) {
        List<Column> columnList = listColumns(schemaName, tableName);
        List<Column> columnListSortByPK = new ArrayList<>();
        for (Column column : columnList) {
            if (column.isKeyFlag()) {
                columnListSortByPK.add(column);
            }
        }
        for (Column column : columnList) {
            if (!column.isKeyFlag()) {
                columnListSortByPK.add(column);
            }
        }
        return columnListSortByPK;
    }

    @Override
    public boolean createTable(Table table) throws Exception {
        String sql = getCreateTableSql(table).replaceAll("\r\n", " ");
        if (Asserts.isNotNull(sql)) {
            return execute(sql);
        } else {
            return false;
        }
    }

    @Override
    public boolean dropTable(Table table) throws Exception {
        String sql = getDropTableSql(table).replaceAll("\r\n", " ");
        if (Asserts.isNotNull(sql)) {
            return execute(sql);
        } else {
            return false;
        }
    }

    @Override
    public boolean truncateTable(Table table) throws Exception {
        String sql = getTruncateTableSql(table).replaceAll("\r\n", " ");
        if (Asserts.isNotNull(sql)) {
            return execute(sql);
        } else {
            return false;
        }
    }

    @Override
    public String getCreateTableSql(Table table) {
        String createTable = null;
        PreparedStatement preparedStatement = null;
        ResultSet results = null;
        String createTableSql = getDBQuery().createTableSql(table.getSchema(), table.getName());
        try {
            preparedStatement = conn.prepareStatement(createTableSql);
            results = preparedStatement.executeQuery();
            if (results.next()) {
                createTable = results.getString(getDBQuery().createTableName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(preparedStatement, results);
        }
        return createTable;
    }

    @Override
    public String getDropTableSql(Table table) {
        StringBuilder sb = new StringBuilder();
        sb.append("DROP TABLE ");
        if (Asserts.isNotNullString(table.getSchema())) {
            sb.append(table.getSchema() + ".");
        }
        sb.append(table.getName());
        return sb.toString();
    }

    @Override
    public String getTruncateTableSql(Table table) {
        StringBuilder sb = new StringBuilder();
        sb.append("TRUNCATE TABLE ");
        if (Asserts.isNotNullString(table.getSchema())) {
            sb.append(table.getSchema() + ".");
        }
        sb.append(table.getName());
        return sb.toString();
    }

    @Override
    public boolean execute(String sql) throws Exception {
        Asserts.checkNullString(sql, "Sql 语句为空");
        try (Statement statement = conn.createStatement()) {
            statement.execute(sql);
        }
        return true;
    }

    @Override
    public int executeUpdate(String sql) throws Exception {
        Asserts.checkNullString(sql, "Sql 语句为空");
        int res = 0;
        try (Statement statement = conn.createStatement()) {
            res = statement.executeUpdate(sql);
        }
        return res;
    }

    @Override
    public JdbcSelectResult query(String sql, Integer limit) {
        if (Asserts.isNull(limit)) {
            limit = 100;
        }
        JdbcSelectResult result = new JdbcSelectResult();
        List<LinkedHashMap<String, Object>> datas = new ArrayList<>();
        List<Column> columns = new ArrayList<>();
        List<String> columnNameList = new ArrayList<>();
        PreparedStatement preparedStatement = null;
        ResultSet results = null;
        int count = 0;
        try {
            preparedStatement = conn.prepareStatement(sql);
            results = preparedStatement.executeQuery();
            if (Asserts.isNull(results)) {
                result.setSuccess(true);
                close(preparedStatement, results);
                return result;
            }
            ResultSetMetaData metaData = results.getMetaData();
            for (int i = 1; i <= metaData.getColumnCount(); i++) {
                columnNameList.add(metaData.getColumnLabel(i));
                Column column = new Column();
                column.setName(metaData.getColumnLabel(i));
                column.setType(metaData.getColumnTypeName(i));
                column.setAutoIncrement(metaData.isAutoIncrement(i));
                column.setNullable(metaData.isNullable(i) == 0 ? false : true);
                column.setJavaType(getTypeConvert().convert(column));
                columns.add(column);
            }
            result.setColumns(columnNameList);
            while (results.next()) {
                LinkedHashMap<String, Object> data = new LinkedHashMap<>();
                for (int i = 0; i < columns.size(); i++) {
                    data.put(columns.get(i).getName(), getTypeConvert().convertValue(results, columns.get(i).getName(), columns.get(i).getType()));
                }
                datas.add(data);
                count++;
                if (count >= limit) {
                    break;
                }
            }
            result.setSuccess(true);
        } catch (Exception e) {
            result.setError(LogUtil.getError(e));
            result.setSuccess(false);
        } finally {
            close(preparedStatement, results);
            result.setRowData(datas);
            return result;
        }
    }

    /**
     * 如果执行多条语句返回最后一条语句执行结果
     *
     * @param sql
     * @param limit
     * @return
     */
    @Override
    public JdbcSelectResult executeSql(String sql, Integer limit) {
        List<SQLStatement> stmtList = SQLUtils.parseStatements(sql, config.getType().toLowerCase());
        List<Object> resList = new ArrayList<>();
        JdbcSelectResult result = JdbcSelectResult.buildResult();
        for (SQLStatement item : stmtList) {
            String type = item.getClass().getSimpleName();
            if (type.toUpperCase().contains("SELECT") || type.toUpperCase().contains("SHOW") || type.toUpperCase().contains("DESC") || type.toUpperCase().contains("SQLEXPLAINSTATEMENT")) {
                result = query(item.toString(), limit);
            } else if (type.toUpperCase().contains("INSERT") || type.toUpperCase().contains("UPDATE") || type.toUpperCase().contains("DELETE")) {
                try {
                    resList.add(executeUpdate(item.toString()));
                    result.setStatusList(resList);
                } catch (Exception e) {
                    resList.add(0);
                    result.setStatusList(resList);
                    result.error(LogUtil.getError(e));
                    return result;
                }
            } else {
                try {
                    execute(item.toString());
                    resList.add(1);
                    result.setStatusList(resList);
                } catch (Exception e) {
                    resList.add(0);
                    result.setStatusList(resList);
                    result.error(LogUtil.getError(e));
                    return result;
                }
            }
        }
        result.success();
        return result;
    }

    @Override
    public List<SqlExplainResult> explain(String sql) {
        List<SqlExplainResult> sqlExplainResults = new ArrayList<>();
        String current = null;
        try {
            List<SQLStatement> stmtList = SQLUtils.parseStatements(sql, config.getType().toLowerCase());
            for (SQLStatement item : stmtList) {
                current = item.toString();
                String type = item.getClass().getSimpleName();
                sqlExplainResults.add(SqlExplainResult.success(type, current, null));
            }
        } catch (Exception e) {
            sqlExplainResults.add(SqlExplainResult.fail(current, LogUtil.getError(e)));
        } finally {
            return sqlExplainResults;
        }
    }

    @Override
    public Map<String, String> getFlinkColumnTypeConversion() {
        return new HashMap<>();
    }

    public List<Map<String, String>> getSplitSchemaList() {
        PreparedStatement preparedStatement = null;
        ResultSet results = null;
        IDBQuery dbQuery = getDBQuery();
        String sql = "select DATA_LENGTH,TABLE_NAME AS `NAME`,TABLE_SCHEMA AS `Database`,TABLE_COMMENT AS COMMENT,TABLE_CATALOG AS `CATALOG`,TABLE_TYPE AS `TYPE`,ENGINE AS `ENGINE`,CREATE_OPTIONS AS `OPTIONS`,TABLE_ROWS AS `ROWS`,CREATE_TIME,UPDATE_TIME from information_schema.tables WHERE TABLE_TYPE='BASE TABLE'";
        List<Map<String, String>> schemas = null;
        try {
            preparedStatement = conn.prepareStatement(sql);
            results = preparedStatement.executeQuery();
            ResultSetMetaData metaData = results.getMetaData();
            List<String> columnList = new ArrayList<>();
            schemas = new ArrayList<>();
            for (int i = 1; i <= metaData.getColumnCount(); i++) {
                columnList.add(metaData.getColumnLabel(i));
            }
            while (results.next()) {
                Map<String, String> map = new HashMap<>();
                for (String column : columnList) {
                    map.put(column, results.getString(column));
                }
                schemas.add(map);

            }
            System.out.println();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(preparedStatement, results);
        }
        return schemas;
    }

    @Override
    public Set<Table> getSplitTables(List<String> tables, Map<String, String> splitConfig) {
        // add 分库分表的主要实现
        Set<Table> set = new HashSet<>();
        List<Map<String, String>> schemaList = getSplitSchemaList();
        IDBQuery dbQuery = getDBQuery();

        for (String table : tables) {
            String[] split = table.split("\\\\.");
            String database = split[0];
            String tableName = split[1];
// 匹配对应的表
            List<Map<String, String>> mapList = schemaList.stream()
                    // 过滤不匹配的表
                    .filter(x -> SplitUtil.contains(database, x.get(dbQuery.schemaName())) && SplitUtil.contains(tableName, x.get(dbQuery.tableName()))).collect(Collectors.toList());
            List<Table> tableList = mapList.stream()
                    // 去重
                    .collect(Collectors.collectingAndThen(
                            Collectors.toCollection(
                                    () -> new TreeSet<>(Comparator.comparing(x -> SplitUtil.getReValue(x.get(dbQuery.schemaName()), splitConfig) + "." + SplitUtil.getReValue(x.get(dbQuery.tableName()), splitConfig)))
                            )
                            , ArrayList::new)
                    )
                    .stream().map(x -> {
                        Table tableInfo = new Table();
                        tableInfo.setName(x.get(dbQuery.tableName()));
                        tableInfo.setComment(x.get(dbQuery.tableComment()));
                        tableInfo.setSchema(x.get(dbQuery.schemaName()));
                        tableInfo.setType(x.get(dbQuery.tableType()));
                        tableInfo.setCatalog(x.get(dbQuery.catalogName()));
                        tableInfo.setEngine(x.get(dbQuery.engine()));
                        tableInfo.setOptions(x.get(dbQuery.options()));
                        tableInfo.setRows(Long.valueOf(x.get(dbQuery.rows())));
                        try {
                            tableInfo.setCreateTime(SimpleDateFormat.getDateInstance().parse(x.get(dbQuery.createTime())));
                            String updateTime = x.get(dbQuery.updateTime());
                            if (Asserts.isNotNullString(updateTime)) {
                                tableInfo.setUpdateTime(SimpleDateFormat.getDateInstance().parse(updateTime));
                            }
                        } catch (ParseException ignored) {

                        }
                        TableType tableType = TableType.type(SplitUtil.isSplit(x.get(dbQuery.schemaName()), splitConfig), SplitUtil.isSplit(x.get(dbQuery.tableName()), splitConfig));
                        tableInfo.setTableType(tableType);

                        if (tableType != TableType.SINGLE_DATABASE_AND_TABLE) {
                            String currentSchemaName = SplitUtil.getReValue(x.get(dbQuery.schemaName()), splitConfig) + "." + SplitUtil.getReValue(x.get(dbQuery.tableName()), splitConfig);
                            List<String> schemaTableNameList = mapList.stream()
                                    .filter(y -> (SplitUtil.getReValue(y.get(dbQuery.schemaName()), splitConfig) + "." + SplitUtil.getReValue(y.get(dbQuery.tableName()), splitConfig)).equals(currentSchemaName))
                                    .map(y -> y.get(dbQuery.schemaName()) + "." + y.get(dbQuery.tableName()))
                                    .collect(Collectors.toList());
                            tableInfo.setSchemaTableNameList(schemaTableNameList);
                        } else {
                            tableInfo.setSchemaTableNameList(Collections.singletonList(x.get(dbQuery.schemaName()) + "." + x.get(dbQuery.tableName())));
                        }
                        return tableInfo;
                    }).collect(Collectors.toList());
            set.addAll(tableList);

        }
        return set;
    }

}
