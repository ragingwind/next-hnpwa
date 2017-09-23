const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
	webpack: (config, {dev}) => {
		if (dev) {
			return config
		}

		// yarn build:report
		if (process.env.npm_config_report) {
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: 'disabled',
					generateStatsFile: true,
					statsFilename: 'stats.json'
				})
			)
		}

		return config
	}
}
