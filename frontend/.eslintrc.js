module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['jest'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },
}
