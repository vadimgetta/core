
/** @type {import("prettier").Config} */
export default {
  trailingComma: "none",
  tabWidth: 4,
  useTabs: true,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  arrowParens: "always",
  importOrderSeparator: "\n",
  importOrderCaseInsensitive: true,
  importOrdreCaseSpaceInsensitive: true,
  importrtOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "jsx",
    "typescript"
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/", "^../(.*)$", "^./(.*)$"],
  pluginSearchDirs: true, plugins: ["@trivago/prettier-plugin-sort-imports"]
}