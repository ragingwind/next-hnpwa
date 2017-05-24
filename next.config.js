module.exports = {
  webpack: (config) => {
    // prevent build error
    config.plugins = config.plugins.filter((plugin) => {
      if (plugin.constructor.name === 'UglifyJsPlugin') {
        return false
      } else {
        return true
      }
    })

    return config
  }
}
