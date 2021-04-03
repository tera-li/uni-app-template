module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 12
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    'prettier/prettier': 'error',
    'no-undef': 1 // 变量参数等拼写错误warn
  }
}
