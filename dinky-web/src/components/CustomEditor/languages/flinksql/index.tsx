import {
  EXTEND_SQL_KEYWORD,
  FLINK_SQL_BUILTIN_FUNCTIONS, FLINK_SQL_KEYWORD, FLINK_SQL_OPERATORS,
  FLINK_SQL_SCOPE_KEYWORDS,
  FLINK_SQL_TYPE_KEYWORDS
} from "@/components/CustomEditor/languages/flinksql/keyword";
import {TokenClassConsts} from "@/components/CustomEditor/languages/flinksql/constants";
import {Monaco} from "@monaco-editor/react";



export function FlinkSQLLanguage(monaco: Monaco | null) {
  // Register a new language
  monaco?.languages.register({
    id: 'flinksql',
    extensions: ['.sql'],
    aliases: ['flinksql', 'fsql', 'flinksql', 'flinkSQL', 'FlinkSQL']
  });
  monaco?.languages.setMonarchTokensProvider('flinksql', {
    defaultToken: "",
    tokenPostfix: ".sql",
    keywords: [...FLINK_SQL_KEYWORD,...EXTEND_SQL_KEYWORD],
    operators: FLINK_SQL_OPERATORS,
    ignoreCase: true, // 忽略大小写
    builtinFunctions: FLINK_SQL_BUILTIN_FUNCTIONS,
    builtinVariables: [],
    typeKeywords: FLINK_SQL_TYPE_KEYWORDS,
    scopeKeywords: FLINK_SQL_SCOPE_KEYWORDS,
    pseudoColumns: [],
    comments: {
      lineComment: '--',
      blockComment: ['/*', '*/']
    },
    brackets: [
      { open: '{', close: '}', token: 'delimiter.curly' },
      { open: '[', close: ']', token: 'delimiter.bracket' },
      { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' }
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' }
    ],
    folding: {
      markers: {
        start: /((create|alter|drop|rename\s+)?(TABLE|DATABASE|STREAM|FUNCTION|PROCEDURE|PACKAGE|TYPE|TRIGGER|INDEX|SCHEMA|VIEW)\b)|((EXECUTE\s+)?(JAR|CDCSOURCE)?\b)/i,
        end: /\)\\;\b/i
      }
    },
    tokenizer: {
      root: [
        { include: '@comments' },
        { include: '@whitespace' },
        { include: '@pseudoColumns' },
        { include: '@numbers' },
        { include: '@strings' },
        { include: '@complexIdentifiers' },
        { include: '@scopes' },
        { include: '@complexDataTypes' },
        [
          /[\w@#$]+/,
          {
            cases: {
              '@scopeKeywords': TokenClassConsts.KEYWORD_SCOPE,
              '@operators': TokenClassConsts.OPERATOR_KEYWORD,
              '@typeKeywords': TokenClassConsts.TYPE,
              '@builtinVariables': TokenClassConsts.VARIABLE,
              '@builtinFunctions': TokenClassConsts.PREDEFINED,
              '@keywords': TokenClassConsts.KEYWORD,
              '@default': TokenClassConsts.IDENTIFIER,
              'fontWeight': 'normal'
            }
          }
        ],
      ],
      whitespace: [[/[\s\t\r\n]+/, TokenClassConsts.WHITE]],
      comments: [
        [/--+.*/, TokenClassConsts.COMMENT],
        [/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
      ],
      comment: [
        [/[^*/]+/, TokenClassConsts.COMMENT],
        [/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@push' }],    // nested comment not allowed :-(
        [/\*\//, { token: TokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
        [/./, TokenClassConsts.COMMENT]
      ],
      pseudoColumns: [
        [
          /[$][A-Za-z_][\w@#$]*/,
          {
            cases: {
              '@pseudoColumns': TokenClassConsts.PREDEFINED,
              '@default': TokenClassConsts.IDENTIFIER
            }
          }
        ]
      ],
      numbers: [
        [/0[xX][0-9a-fA-F]*/, TokenClassConsts.NUMBER_HEX],
        [/[$][+-]*\d*(\.\d*)?/, TokenClassConsts.NUMBER],
        [/((\d+(\.\d*)?)|(\.\d+))([eE][\\\-+]?\d+)?/, TokenClassConsts.NUMBER]
      ],
      strings: [[/'/, { token: "custom-error", next: '@string' }]],
      string: [
        [/[^']+/, TokenClassConsts.STRING ],
        [/''/, TokenClassConsts.STRING],
        [/'/, { token: TokenClassConsts.STRING, next: '@pop' }]
      ],
      complexIdentifiers: [
        [/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@quotedIdentifier' }]
      ],
      quotedIdentifier: [
        [/[^`]+/, TokenClassConsts.IDENTIFIER_QUOTE],
        [/``/, TokenClassConsts.IDENTIFIER_QUOTE],
        [/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
      ],
      scopes: [
        [/(EXECUTE\s+)?JAR\s+/i, TokenClassConsts.KEYWORD_SCOPE],
        [/(EXECUTE\s+)?CDCSOURCE\s/i, TokenClassConsts.KEYWORD_SCOPE],
        [/(PRINT\s+)?\s/i, TokenClassConsts.KEYWORD_SCOPE]
      ],
      complexDataTypes: [
        [/DOUBLE\s+PRECISION\b/i, { token: TokenClassConsts.TYPE }],
        [/WITHOUT\s+TIME\s+ZONE\b/i, { token: TokenClassConsts.TYPE }],
        [/WITH\s+LOCAL\s+TIME\s+ZONE\b/i, { token: TokenClassConsts.TYPE }]
      ]
    },
    unicode: true
  });

  monaco?.languages?.registerCompletionItemProvider('flinksql', {
    provideCompletionItems: function (model, position) {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      return {
        suggestions: FLINK_SQL_KEYWORD.map((item) => {
          return {
            label: item,
            range: range,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: item
          };
        })
      }
    }
  })

  // monaco-editor 自定义语言之后 注释代码的快捷键失效 如何解决
  monaco?.languages?.setLanguageConfiguration('flinksql', {
    comments: {
      lineComment: '--',
      blockComment: ['/*', '*/'],
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' },
    ],
    indentationRules: {
      increaseIndentPattern: /^\s*(\w+\s+)+\w/,
      decreaseIndentPattern: /^\s*(\w+\s+)+\w/
    },
    onEnterRules: [
      {
        beforeText: /^\s*(\/\*)/,
        afterText: /^\s*\*\/$/,
        action: { indentAction: monaco.languages.IndentAction.IndentOutdent, appendText: ' * ' }
      }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' },
    ],
    colorizedBracketPairs: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],

    folding: {
      offSide: true,
      markers: {
        start: /((create|alter|drop|rename\s+)?(TABLE|DATABASE|STREAM|FUNCTION|PROCEDURE|PACKAGE|TYPE|TRIGGER|INDEX|SCHEMA|VIEW)\b)|((EXECUTE\s+)?(JAR|CDCSOURCE)?\b)/i,
        end: /\)\\;\b/i
      }
    },

  });
}
