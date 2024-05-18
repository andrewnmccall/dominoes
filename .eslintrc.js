module.exports = {
	'plugins': [
		// "jsdoc"
	],
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'google',
		// 'plugin:jsdoc/recommended-error',
	],
	'overrides': [
		{
			'env': {
				'node': true,
			},
			'files': [
				'.eslintrc.{js,cjs}',
			],
			'parserOptions': {
				'sourceType': 'script',
			},
		},
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'rules': {
		'indent': ['error', 'tab'],
		'no-tabs': ['off'],
		'require-jsdoc': ['off'],
	},
};
