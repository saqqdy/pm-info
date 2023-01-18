module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: 'auto',
				useBuiltIns: 'usage',
				corejs: 3,
				targets: 'node 12.20'
			}
		],
		'@babel/typescript'
	],
	plugins: []
}
