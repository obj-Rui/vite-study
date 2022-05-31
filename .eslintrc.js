/*
 * @Author: wangrui
 * @Date: 2022-04-11 18:00:13
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-04-12 15:59:24
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': 'off',
    semi: ['error', 'always'],
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0
  }
};
