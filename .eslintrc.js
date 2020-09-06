module.exports = {
  'env': {
    'es6': true,
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': [1, 'single', { 'allowTemplateLiterals': true }],
    'react/prop-types': 'warn',
    'indent': ['warn', 2],
  },
  'globals': {
    '__DEV__': true,
    'module': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
