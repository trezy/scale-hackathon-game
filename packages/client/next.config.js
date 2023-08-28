/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

// Module imports
const ScaleAdapter = require('@loopholelabs/scale-http-adapters/nextjs')





module.exports = ScaleAdapter.WithScale({
	reactStrictMode: true,

	// eslint-disable-next-line jsdoc/require-jsdoc
	webpack(config) {
		config.module.rules.push({
			test: /\.scale$/u,
			use: [{
				loader: '@loopholelabs/scalefile/webpack',
			}],
		})
		return config
	},
})
