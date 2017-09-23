const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
	webpack: (config, {dev}) => {
		if (dev) {
			return config
		}

		// yarn build:next --preact
		if (process.env.npm_config_preact) {
			// using preact instead of minified version of react
			// to use super lightweight package
			console.log('> Using Preact instead of React')
			config.resolve.alias = {
				react: 'preact-compat/dist/preact-compat',
				'react-dom': 'preact-compat/dist/preact-compat'
			}
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
