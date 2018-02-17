const {WebpackBundleSizeAnalyzerPlugin} = require('webpack-bundle-size-analyzer')
const NextWorkboxWebpackPlugin = require('@pwa/next-workbox-webpack-plugin')

module.exports = {
	webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
		if (isServer || dev) {
			return config
		}

		config.plugins.push(new NextWorkboxWebpackPlugin({
			distDir,
			buildId,
			importScripts: [
				'/static/scripts/hackernews-sw-init.js'
			]
		}))

		// run with yarn build:report
		if (process.env.npm_config_report) {
			config.plugins.push(
				new WebpackBundleSizeAnalyzerPlugin('stats.txt')
			)
		}

		return config
	}
}
