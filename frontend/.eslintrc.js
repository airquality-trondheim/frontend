module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'react-native'],
  rules: {
    'require-jsdoc': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'valid-jsdoc': 'off',
    'no-shadow': 'warn',
    'no-unreachable': 'error',
    'no-fallthrough': 'error',
    'max-len': ['error', { code: 120 }],
    'react/no-unescaped-entities': 'error',
    'react-native/no-raw-text': [
      2,
      {
        skip: ['MonoText'],
      },
    ],
    'react-native/no-single-element-style-arrays': 1,
    'react-native/no-unused-styles': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
