// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "rules";

// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["rulesdir"],
  rules: {
    "rulesdir/no-process-node-env": "error",
    "rulesdir/kimahri-not-pass": "error",
  },
};
