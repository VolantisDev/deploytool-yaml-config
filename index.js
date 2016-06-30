/**
 * Created by Ben on 6/29/2016.
 */

var objectAssign = require('object-assign')
var yaml_config = require('node-yaml-config')

var defaults = {
  configFile: '.deploytool.yml',
  configDir: __dirname
}

module.exports = {
  loadConfig: function (options) {
    options = objectAssign(defaults, options)

    var path = options.configDir + '/' + options.configFile

    return yaml_config.load(path)
  }
}
