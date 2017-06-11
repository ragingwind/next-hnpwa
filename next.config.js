const webpack = require('webpack')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  webpack: async (config, { dev }) => {
    if (dev) {
      return config
    }

    // using preact instead of minified version of react
    // in production for mobile
    config.resolve.alias = {
      "react": "preact-compat/dist/preact-compat",
      "react-dom": "preact-compat/dist/preact-compat",
      "firebase-hackernews": "firebase-hackernews/es"
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
