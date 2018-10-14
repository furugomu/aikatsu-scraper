module.exports = {
  plugins: ["@furugomu"],
  extends: [
    "plugin:@furugomu/recommended",
    "plugin:@furugomu/+ts",
    "plugin:@furugomu/+tsx"
  ],
  env:{jest:true},
  overrides: [
    {
      files: ["src/main/**/*.ts"],
      env: {
        node: true
      }
    },
    {
      files: ["src/renderer/**/*.{ts,tsx}"],
      env: {
        browser: true
      },
      globals: { require: true }
    }
  ],
  settings: { react: { version: "16.4" } }
};
