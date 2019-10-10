module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended"
  ],
  env: { node: true, es6: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  rules: {
    complexity: ["warn", 6],
    eqeqeq: ["error", "smart"],
    "no-console": "warn",
    "no-template-curly-in-string": "warn",
    "no-var": "error",
    "prefer-const": "error"
  },
  overrides: [
    // .eslintrc.js 等の設定ファイル
    {
      files: ["*.js"],
      parserOptions: {
        sourceType: "script"
      },
      env: { node: true }
    },
    {
      files: ["*.test.ts"],
      env: { node: true, es6: true, jest: true }
    }
  ]
};
