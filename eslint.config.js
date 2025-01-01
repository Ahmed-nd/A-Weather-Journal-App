const tseslint = require('@typescript-eslint/eslint-plugin');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [tseslint],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',  // Example rule to prevent usage of 'any'
        '@typescript-eslint/explicit-function-return-type': 'warn',  // Enforce return types
      },
    },
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
};

