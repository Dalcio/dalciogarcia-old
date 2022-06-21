module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'prettier/standard',
		'prettier/react'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'off',
		'react/react-in-jsx-scope': 'off',
		'space-before-function-paren': 'off',
		'react/prop-types': 'off',
		indent: 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/no-unescaped-entities': 'off',
		'no-tabs': 0,
		semi: 'off'
	}
};
