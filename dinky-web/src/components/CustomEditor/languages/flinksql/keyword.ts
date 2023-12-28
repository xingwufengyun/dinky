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

export const EXTEND_SQL_KEYWORD: string[] = ['CDCSOURCE', 'EXECUTE', 'PRINT', 'CUSTOMJAR'];

export const FLINK_SQL_KEYWORD: string[] = [
  'ABS',
  'ADD',
  'AFTER',
  'ALL',
  'ALLOCATE',
  'ALLOW',
  'ALTER',
  'ANALYZE',
  'AND',
  'ANY',
  'ARE',
  'ARRAY',
  'ARRAY_AGG',
  'ARRAY_CONCAT_AGG',
  'ARRAY_MAX_CARDINALITY',
  'AS',
  'ASC',
  'ASENSITIVE',
  'ASYMMETRIC',
  'AT',
  'ATOMIC',
  'AUTHORIZATION',
  'AVG',
  'BEGIN',
  'BEGIN_FRAME',
  'BEGIN_PARTITION',
  'BETWEEN',
  'BIGINT',
  'BINARY',
  'BIT',
  'BLOB',
  'BOOLEAN',
  'BOTH',
  'BY',
  'BYTES',
  'CALL',
  'CALLED',
  'CARDINALITY',
  'CASCADE',
  'CASCADED',
  'CASE',
  'CAST',
  'CATALOG',
  'CATALOGS',
  'CEIL',
  'CEILING',
  'CENTURY',
  'CHANGELOG_MODE',
  'CHAR',
  'CHARACTER',
  'CHARACTER_LENGTH',
  'CHAR_LENGTH',
  'CHECK',
  'CLASSIFIER',
  'CLOB',
  'CLOSE',
  'COALESCE',
  'COLLATE',
  'COLLECT',
  'COLUMN',
  'COLUMNS',
  'COMMENT',
  'COMMIT',
  'COMPUTE',
  'CONDITION',
  'CONFIG',
  'CONNECT',
  'CONSTRAINT',
  'CONSTRAINTS',
  'CONTAINS',
  'CONVERT',
  'CORR',
  'CORRESPONDING',
  'COUNT',
  'COVAR_POP',
  'COVAR_SAMP',
  'CREATE',
  'CROSS',
  'CUBE',
  'CUME_DIST',
  'CUMULATE',
  'CURRENT',
  'CURRENT_CATALOG',
  'CURRENT_DATE',
  'CURRENT_DEFAULT_TRANSFORM_GROUP',
  'CURRENT_PATH',
  'CURRENT_ROLE',
  'CURRENT_ROW',
  'CURRENT_SCHEMA',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_TRANSFORM_GROUP_FOR_TYPE',
  'CURRENT_USER',
  'CURSOR',
  'CYCLE',
  'DATA',
  'DATABASE',
  'DATABASES',
  'DATE',
  'DATETIME',
  'DATETIME_DIFF',
  'DATETIME_TRUNC',
  'DATE_DIFF',
  'DATE_TRUNC',
  'DAY',
  'DAYOFWEEK',
  'DAYOFYEAR',
  'DAYS',
  'DEALLOCATE',
  'DEC',
  'DECADE',
  'DECIMAL',
  'DECLARE',
  'DEFAULT',
  'DEFINE',
  'DELETE',
  'DENSE_RANK',
  'DEREF',
  'DESC',
  'DESCRIBE',
  'DESCRIPTOR',
  'DETERMINISTIC',
  'DISALLOW',
  'DISCONNECT',
  'DISTINCT',
  'DIV',
  'DOT',
  'DOUBLE',
  'DROP',
  'DYNAMIC',
  'EACH',
  'ELEMENT',
  'ELSE',
  'EMPTY',
  'END',
  'END-EXEC',
  'END_FRAME',
  'END_PARTITION',
  'ENFORCED',
  'ENGINE',
  'EPOCH',
  'EQUALS',
  'ESCAPE',
  'ESTIMATED_COST',
  'EVERY',
  'EXCEPT',
  'EXCLUDING',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXP',
  'EXPLAIN',
  'EXTEND',
  'EXTENDED',
  'EXTERNAL',
  'EXTRACT',
  'FALSE',
  'FETCH',
  'FILE',
  'FILTER',
  'FIRST',
  'FIRST_VALUE',
  'FLOAT',
  'FLOOR',
  'FOR',
  'FOREIGN',
  'FRAME_ROW',
  'FREE',
  'FRIDAY',
  'FROM',
  'FULL',
  'FUNCTION',
  'FUNCTIONS',
  'FUSION',
  'GENERATED',
  'GET',
  'GLOBAL',
  'GRANT',
  'GROUP',
  'GROUPING',
  'GROUPS',
  'GROUP_CONCAT',
  'HAVING',
  'HOLD',
  'HOP',
  'HOUR',
  'HOURS',
  'IDENTITY',
  'IF',
  'IGNORE',
  'ILIKE',
  'IMPORT',
  'IN',
  'INCLUDE',
  'INCLUDING',
  'INDICATOR',
  'INITIAL',
  'INNER',
  'INOUT',
  'INSENSITIVE',
  'INSERT',
  'INT',
  'INTEGER',
  'INTERSECT',
  'INTERSECTION',
  'INTERVAL',
  'INTO',
  'IS',
  'JAR',
  'JARS',
  'JAVA',
  'JOIN',
  'JSON_ARRAY',
  'JSON_ARRAYAGG',
  'JSON_EXECUTION_PLAN',
  'JSON_EXISTS',
  'JSON_OBJECT',
  'JSON_OBJECTAGG',
  'JSON_QUERY',
  'JSON_VALUE',
  'KEY',
  'LAG',
  'LANGUAGE',
  'LARGE',
  'LAST',
  'LAST_VALUE',
  'LATERAL',
  'LEAD',
  'LEADING',
  'LEFT',
  'LIKE',
  'LIKE_REGEX',
  'LIMIT',
  'LN',
  'LOAD',
  'LOCAL',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOWER',
  'MAP',
  'MATCH',
  'MATCHES',
  'MATCH_NUMBER',
  'MATCH_RECOGNIZE',
  'MAX',
  'MEASURES',
  'MEMBER',
  'MERGE',
  'METADATA',
  'METHOD',
  'MICROSECOND',
  'MILLENNIUM',
  'MILLISECOND',
  'MIN',
  'MINUS',
  'MINUTE',
  'MINUTES',
  'MOD',
  'MODIFIES',
  'MODIFY',
  'MODULE',
  'MODULES',
  'MONDAY',
  'MONTH',
  'MONTHS',
  'MORE',
  'MULTISET',
  'NANOSECOND',
  'NATIONAL',
  'NATURAL',
  'NCHAR',
  'NCLOB',
  'NEW',
  'NEXT',
  'NO',
  'NONE',
  'NORMALIZE',
  'NOT',
  'NTH_VALUE',
  'NTILE',
  'NULL',
  'NULLIF',
  'NULLS',
  'NUMERIC',
  'OCCURRENCES_REGEX',
  'OCTET_LENGTH',
  'OF',
  'OFFSET',
  'OLD',
  'OMIT',
  'ON',
  'ONE',
  'ONLY',
  'OPEN',
  'OPTIONS',
  'OR',
  'ORDER',
  'ORDINAL',
  'OUT',
  'OUTER',
  'OVER',
  'OVERLAPS',
  'OVERLAY',
  'OVERWRITE',
  'OVERWRITING',
  'PARAMETER',
  'PARTITION',
  'PARTITIONED',
  'PARTITIONS',
  'PAST',
  'PATTERN',
  'PER',
  'PERCENT',
  'PERCENTILE_CONT',
  'PERCENTILE_DISC',
  'PERCENT_RANK',
  'PERIOD',
  'PERMUTE',
  'PIVOT',
  'PLAN',
  'PORTION',
  'POSITION',
  'POSITION_REGEX',
  'POWER',
  'PRECEDES',
  'PRECEDING',
  'PRECISION',
  'PREPARE',
  'PREV',
  'PRIMARY',
  'PROCEDURE',
  'PYTHON',
  'PYTHON_ARCHIVES',
  'PYTHON_DEPENDENCIES',
  'PYTHON_FILES',
  'PYTHON_JAR',
  'PYTHON_PARAMETER',
  'PYTHON_REQUIREMENTS',
  'QUALIFY',
  'QUARTER',
  'QUARTERS',
  'RANGE',
  'RANK',
  'RAW',
  'READS',
  'REAL',
  'RECURSIVE',
  'REF',
  'REFERENCES',
  'REFERENCING',
  'REGR_AVGX',
  'REGR_AVGY',
  'REGR_COUNT',
  'REGR_INTERCEPT',
  'REGR_R2',
  'REGR_SLOPE',
  'REGR_SXX',
  'REGR_SXY',
  'REGR_SYY',
  'RELEASE',
  'REMOVE',
  'RENAME',
  'RESET',
  'RESTRICT',
  'RESULT',
  'RETURN',
  'RETURNS',
  'REVOKE',
  'RIGHT',
  'RLIKE',
  'ROLLBACK',
  'ROLLUP',
  'ROW',
  'ROWS',
  'ROW_NUMBER',
  'RUNNING',
  'SAFE_CAST',
  'SAFE_OFFSET',
  'SAFE_ORDINAL',
  'SATURDAY',
  'SAVEPOINT',
  'SCALA',
  'SCOPE',
  'SCROLL',
  'SEARCH',
  'SECOND',
  'SECONDS',
  'SEEK',
  'SELECT',
  'SENSITIVE',
  'SEPARATOR',
  'SESSION',
  'SESSION_USER',
  'SET',
  'SETS',
  'SHOW',
  'SIMILAR',
  'SIZE',
  'SKIP',
  'SLIDE',
  'SMALLINT',
  'SOME',
  'SPECIFIC',
  'SPECIFICTYPE',
  'SQL',
  'SQLEXCEPTION',
  'SQLSTATE',
  'SQLWARNING',
  'SQRT',
  'START',
  'STATEMENT',
  'STATIC',
  'STATISTICS',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'STEP',
  'STREAM',
  'STRING',
  'STRING_AGG',
  'SUBMULTISET',
  'SUBSET',
  'SUBSTRING',
  'SUBSTRING_REGEX',
  'SUCCEEDS',
  'SUM',
  'SUNDAY',
  'SYMMETRIC',
  'SYSTEM',
  'SYSTEM_TIME',
  'SYSTEM_USER',
  'TABLE',
  'TABLES',
  'TABLESAMPLE',
  'TEMPORARY',
  'THEN',
  'THURSDAY',
  'TIME',
  'TIMECOL',
  'TIMESTAMP',
  'TIMESTAMP_DIFF',
  'TIMESTAMP_LTZ',
  'TIMESTAMP_TRUNC',
  'TIMEZONE_HOUR',
  'TIMEZONE_MINUTE',
  'TIME_DIFF',
  'TIME_TRUNC',
  'TINYINT',
  'TO',
  'TRAILING',
  'TRANSLATE',
  'TRANSLATE_REGEX',
  'TRANSLATION',
  'TREAT',
  'TRIGGER',
  'TRIM',
  'TRIM_ARRAY',
  'TRUE',
  'TRUNCATE',
  'TRY_CAST',
  'TUESDAY',
  'TUMBLE',
  'UESCAPE',
  'UNION',
  'UNIQUE',
  'UNKNOWN',
  'UNLOAD',
  'UNNEST',
  'UNPIVOT',
  'UPDATE',
  'UPPER',
  'UPSERT',
  'USE',
  'USER',
  'USING',
  'VALUE',
  'VALUES',
  'VALUE_OF',
  'VARBINARY',
  'VARCHAR',
  'VARYING',
  'VAR_POP',
  'VAR_SAMP',
  'VERSIONING',
  'VIEW',
  'VIEWS',
  'VIRTUAL',
  'WATERMARK',
  'WATERMARKS',
  'WEDNESDAY',
  'WEEK',
  'WEEKS',
  'WHEN',
  'WHENEVER',
  'WHERE',
  'WIDTH_BUCKET',
  'WINDOW',
  'WITH',
  'WITHIN',
  'WITHOUT',
  'YEAR',
  'YEARS',
  'ZONE',
  'REPLACE'
];

export const FLINK_SQL_OPERATORS: string[] = [
  // Set
  'EXCEPT',
  'INTERSECT',
  'UNION',
  // Logical
  'AND',
  'OR',
  'NOT',
  // Arithmetic
  'DIV',
  // Join
  'LEFT',
  'RIGHT',
  'FULL',
  'INNER',
  'CROSS',
  'OUTER',
  'JOIN',
  'NATURAL',
  // Predicates
  'EXISTS',
  'IS',
  'ALL',
  'DISTINCT',
  'ANY',
  'BETWEEN',
  'IN',
  'LIKE',
  'RLIKE',
  'SIMILAR',
  'TO',
  'ESCAPE'
];

/**
 * builtinFunctions
 */
export const FLINK_SQL_BUILTIN_FUNCTIONS: string[] = [
  'POWER',
  'ABS',
  'SORT',
  'LN',
  'LOG10',
  'LOG2',
  'LOG',
  'EXP',
  'CEIL',
  'CEILING',
  'FLOOR',
  'SIN',
  'SINH',
  'COS',
  'TAN',
  'TANH',
  'COT',
  'ASIN',
  'ACOS',
  'ATAN',
  'ATAN2',
  'COSH',
  'DEGREES',
  'RADIANS',
  'SIGN',
  'ROUND',
  'PI',
  'E',
  'RAND',
  'RAND_INTEGER',
  'UUID',
  'BIN',
  'HEX',
  'TRUNCATE',
  // String Functions
  'CHAR_LENGTH',
  'CHARACTER_LENGTH',
  'UPPER',
  'LOWER',
  'POSITION',
  'TRIM',
  'LTRIM',
  'RTRIM',
  'REPEAT',
  'REGEXP_REPLACE',
  'OVERLAY',
  'SUBSTRING',
  'REPLACE',
  'REGEXP_EXTRACT',
  'INITCAP',
  'CONCAT',
  'CONCAT_WS',
  'LPAD',
  'RPAD',
  'FROM_BASE64',
  'TO_BASE64',
  'ASCII',
  'CHR',
  'DECODE',
  'ENCODE',
  'INSTR',
  'LOCATE',
  'PARSE_URL',
  'REGEXP',
  'REVERSE',
  'SPLIT_INDEX',
  'STR_TO_MAP',
  'SUBSTR',
  // Temporal Functions
  'NOW',
  'CURRENT_ROW_TIMESTAMP',
  'EXTRACT',
  'YEAR',
  'QUARTER',
  'MONTH',
  'WEEK',
  'DAYOFYEAR',
  'DAYOFMONTH',
  'DAYOFWEEK',
  'HOUR',
  'MINUTE',
  'SECOND',
  'FLOOR',
  'DATE_FORMAT',
  'TIMESTAMPADD',
  'TIMESTAMPDIFF',
  'CONVERT_TZ',
  'FROM_UNIXTIME',
  'UNIX_TIMESTAMP',
  'TO_DATE',
  'TO_TIMESTAMP_LTZ',
  'TO_TIMESTAMP',
  'CURRENT_WATERMARK',
  // Conditional Functions
  'COALESCE',
  'IF',
  'IFNULL',
  'IS_ALPHA',
  'IS_DECIMAL',
  'IS_DIGIT',
  'GREATEST',
  'LEAST',
  // Type Conversion Functions
  'CAST',
  'TRY_CAST',
  'TYPEOF',
  // Collection Functions
  'CARDINALITY',
  'ELEMENT',
  'ARRAY_CONTAINS',
  // JSON Functions
  'JSON_EXISTS',
  'JSON_STRING',
  'JSON_VALUE',
  'JSON_QUERY',
  'JSON_OBJECT',
  'JSON_OBJECTAGG',
  'JSON_ARRAY',
  'JSON_ARRAYAGG',
  // Grouping Functions
  'GROUP_ID',
  'GROUPING',
  // Hash Functions
  'MD5',
  'SHA1',
  'SHA224',
  'SHA256',
  'SHA384',
  'SHA512',
  'SHA2',
  // Aggregate Functions
  'COUNT',
  'AVG',
  'SUM',
  'MAX',
  'MIN',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'VAR_POP',
  'VAR_SAMP',
  'COLLECT',
  'VARIANCE',
  'RANK',
  'DENSE_RANK',
  'ROW_NUMBER',
  'LEAD',
  'LAG',
  'FIRST_VALUE',
  'LAST_VALUE',
  'LISTAGG',
  'CUME_DIST',
  'PERCENT_RANK',
  'NTILE'
];

/**
 * typeKeywords
 */
export const FLINK_SQL_TYPE_KEYWORDS: string[] = [
  // https://nightlies.apache.org/flink/flink-docs-release-1.16/docs/dev/table/types/#list-of-data-types
  'CHAR',
  'VARCHAR',
  'STRING',
  'BOOLEAN',
  'BINARY',
  'VARBINARY',
  'BYTES',
  'DECIMAL',
  'TINYINT',
  'SMALLINT',
  'INTEGER',
  'BIGINT',
  'FLOAT',
  'DOUBLE',
  'DATE',
  'TIME',
  'TIMESTAMP',
  'TIMESTAMP_LTZ',
  'INTERVAL',
  'ARRAY',
  'MULTISET',
  'MAP',
  'ROW',
  'RAW',
  'DEC',
  'NUMERIC',
  'INTERVAL'
];

/**
 * scopeKeywords
 */
export const FLINK_SQL_SCOPE_KEYWORDS: string[] = ['CASE', 'END', 'WHEN', 'THEN', 'ELSE'];
