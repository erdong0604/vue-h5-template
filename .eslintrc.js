module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "@vue/standard"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "comma-spacing": [ 1, { before: false, after: true } ], // 逗号后要有空格
        "no-alert": 0, // 禁止使用alert confirm prompt
        "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
        "no-empty": 2, // 块语句中的内容不能为空
        "no-eq-null": 2, // 禁止对null使用==或!=运算符
        "no-extra-parens": 2, // 禁止非必要的括号
        "no-extra-semi": 2, // 禁止多余的冒号
        "no-func-assign": 2, // 禁止重复的函数声明
        "no-irregular-whitespace": 2, // 不能有不规则的空格
        "no-return-assign": 1, // return 语句中不能有赋值表达式
        "no-var": 2, // 禁用var，用let和const代替
        "indent": [ 2, 4 ], // 缩进风格
        "quotes": [ 2, "double" ], // 双引号
        "no-console": 0, // 不禁用console
        "no-debugger": 2, // 禁用debugger
        "no-trailing-spaces": 1, // 一行结束后面有空格就发出警告
        "no-unused-vars": [ 0, { vars: "all", args: "after-used" } ], // 不能有声明后未被使用的变量或参数
        "no-underscore-dangle": 1, // 标识符不能以_开头或结尾
        "no-class-assign": 2, // 禁止给类赋值
        "camelcase": 0, // 强制驼峰法命名
        "no-undef": 2, // 不能有未定义的变量
        "no-this-before-super": 0, // 在调用super()之前不能使用this或super
        "func-call-spacing": 0, // 禁止函数名与()之间有空格
        "no-unreachable": 1, // 不能有无法执行的代码
        "eqeqeq": 2, // 必须使用全等
        // 强制要求在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": [ 2, {
            "beforeColon": false,
            "afterColon": true
        } ],
        "no-tabs": 0,
        "no-lone-blocks": 2, // 禁用不必要的嵌套块
        "no-multi-spaces": 2, // 禁止使用多个空格
        "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
        "comma-dangle": [ 2, "never" ], // 禁止末尾逗号
        // 强制在代码块中使用一致的大括号风格
        "brace-style": [ 2, "1tbs", {
            "allowSingleLine": true
        } ],

        "block-spacing": [ 2, "always" ], // 强制在代码块中开括号前和闭括号后有空格
        "array-bracket-spacing": [ 2, "always" ], // 强制在中括号符号前后加空格
        // 强制箭头函数的箭头前后使用一致的空格
        "arrow-spacing": [ 2, {
            before: true,
            after: true
        } ],
        // 强制所有控制语句使用一致的括号风格
        "curly": [ 2, "multi-line" ],
        // 禁止文件末尾存在空行
        "eol-last": 2,
        "no-multiple-empty-lines": [ 2, {
            max: 3,
            maxEOF: 3,
            maxBOF: 3
        } ], // 禁止出现多行空行（此处设置最多出现连续3个空行）
        "no-redeclare": 2, // 禁止多次声明同一变量
        "no-self-compare": 2, // 禁止自身比较
        "no-whitespace-before-property": 2, // 禁止属性前有空白
        semi: [ 2, "always" ],
        "semi-spacing": [ 2, {
            before: false,
            after: true
        } ], // 强制分号之前和之后使用一致的空格
        // 'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
        "space-before-function-paren": [ 2, "never" ], // 强制在 function的左括号之前使用一致的空格
        "space-in-parens": [ 2, "always" ], // 强制在圆括号内使用一致的空格
        "space-infix-ops": 2, // 要求操作符周围有空格
        "space-unary-ops": [ 2, {
            "words": true,
            "nonwords": false
        } ], // 强制在一元操作符前后使用一致的空格
        "spaced-comment": [ 2, "always", {
            "markers": [ "global", "globals", "eslint", "eslint-disable", "*package", "!", "," ]
        } ], // 强制在注释中 // 或 /* 使用一致的空格
        "template-curly-spacing": [ 2, "never" ], // 禁止模板字符串中的嵌入表达式周围空格的使用
        // "prefer-const": 2, // 要求使用 const 声明那些声明后不再被修改的变量
        "object-curly-spacing": [ 2, "always", {
            "objectsInObjects": false
        } ], // 强制在大括号中使用一致的空格
        // 'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
        "vue/v-on-function-call": [ "error", "never" ], // 允许函数带(a)

        "vue/no-use-v-if-with-v-for": [ "error", {
            "allowUsingIterationVar": true
        } ],

        "vue/max-attributes-per-line": [ "error", {
            "singleline": 1,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        } ],
        "vue/html-indent": [ "error", "tab", {
            "alignAttributesVertically": true
        } ],
        "vue/singleline-html-element-content-newline": [ "error", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true
        } ]

    }
};
