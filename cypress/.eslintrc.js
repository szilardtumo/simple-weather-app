module.exports = {
  root: false,
  plugins: ['eslint-plugin-cypress'],
  parser: '@typescript-eslint/parser',
  env: { 'cypress/globals': true },
  extends: ['plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
