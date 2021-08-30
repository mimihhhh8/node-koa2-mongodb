module.exports = {
  root: true,
  extends: [
    'standard' // '@vue/standard',eslint起检测作用主要的代码
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
  }
}
