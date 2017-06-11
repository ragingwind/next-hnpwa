const webpack = require('webpack');

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

    return config
  }
}
