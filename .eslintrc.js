/*
 * @Author: wangrui
 * @Date: 2022-04-11 18:00:13
 * @LastEditors: wangrui
 * @Description: 
 * @LastEditTime: 2022-06-01 15:31:45
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    // 可共享配置的名称、eslint:recommended 或 eslint:all,表示默认开启一些内置的规则，包含的，在 https://eslint.bootcss.com/docs/rules/ 中可以查看内置规则
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 'latest', // 指定你想要使用的 ECMAScript 版本 12 latest
        "parser": "@typescript-eslint/parser",
        "sourceType": "module" //"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    // 配置规则的地方 这里就是我们所需要配置的规则
    "rules": {
    }
};
