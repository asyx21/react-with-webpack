module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      }
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'react/no-multi-comp': 'off',
    camelcase: 'off',
  },
};
