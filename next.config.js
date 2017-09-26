const {WebpackBundleSizeAnalyzerPlugin} = require('webpack-bundle-size-analyzer')

module.exports = {
	webpack: (config, {dev}) => {
		if (dev) {
			return config
		}

		// yarn build:report
		if (process.env.npm_config_report) {
			config.plugins.push(
				new WebpackBundleSizeAnalyzerPlugin('stats.txt')
			)
		}

		return config
	}
}
