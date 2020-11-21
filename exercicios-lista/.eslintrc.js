module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-plusplus': 'off',
  },
  overrides: [
    {
      files: ['**/test/**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
