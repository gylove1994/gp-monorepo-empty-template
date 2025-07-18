import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  typescript: true,
  ignores: ['*.md', '**/lottie/*.json', '**/templates/*', '**/.turbo/**', '**/dist/**', '**/node_modules/**'],
  rules: {
    'style/no-tabs': [
      'error',
      {
        allowIndentationTabs: true,
      },
    ],
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'style/semi': ['error', 'always'],
    'jsdoc/check-alignment': 'off',
    'no-console': 'off',
  },
});
