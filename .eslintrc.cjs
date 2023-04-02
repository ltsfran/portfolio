module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-absolute-path': 'off'
  }
}
