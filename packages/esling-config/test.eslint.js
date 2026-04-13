// @ts-check

const tseslint = require('typescript-eslint');
const accurtypeStyle = require('.');

const config = tseslint.config(
	...accurtypeStyle,
	...tseslint.configs.stylisticTypeChecked,
	{
		name: 'TS Config',
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: __dirname,
				projectService: true,
			},
		},
	},
);

module.exports = config;
