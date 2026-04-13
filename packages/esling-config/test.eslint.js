import accurtypeStyle from 'eslint-config-accurtype-style';
import { defineConfig } from 'eslint/config';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { configs } from 'typescript-eslint';

/**
 * ESLint config for testing
 * @author e0selmy4v
 * @license MIT
 */
const config = defineConfig(
	...accurtypeStyle,
	...configs.stylisticTypeChecked,
	{
		name: 'TS Config',
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
				projectService: true,
			},
		},
	},
);

export default config;
