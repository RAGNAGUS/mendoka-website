/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {
    "no-unused-vars": "off",
  },
  // Build-time switch defined in vite.config.js.
  globals: {
    __SHOW_LANTERN_HEARTH__: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
