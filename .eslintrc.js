module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': ['off'],
    'no-bitwise': ['off'],
    'no-plusplus': ['off'],
    'no-restricted-globals': ['off'],
    'no-use-before-define': ['off'],
    'no-param-reassign': ['off'],
  },
};
