import sortImports from "@trivago/prettier-plugin-sort-imports";

/** @type {import("prettier").Config} */
export default {
	trailingComma: "none",
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	arrowParens: "always",
	importOrderSeparation: true,
	importOrderCaseInsensitive: true,
	importOrderParserPlugins: [
		"classProperties",
		"decorators-legacy",
		"jsx",
		"typescript"
	],
	importOrder: ["<THIRD_PARTY_MODULES>", "^@/", "^../(.*)$", "^./(.*)$"],
	plugins: [sortImports]
};
