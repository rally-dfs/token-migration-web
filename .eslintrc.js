module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'debug', 'error'] }],
    'prettier/prettier': 'error',
  },
};
