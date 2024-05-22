import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbConfig from "eslint-config-airbnb";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  airbnbConfig.rules,
];


