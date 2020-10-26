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
    'no-shadow': 'off',
    'no-fallthrough': 'error',
    'max-len': ['error', { code: 120 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': [1, 'type'],
    'react-native/no-raw-text': [
      2,
      {
        skip: ['MonoText'],
      },
    ],
    'react-native/no-single-element-style-arrays': 1,
    'react-native/no-unused-styles': 1,
    'react-native/no-color-literals': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
