const { merge } = require("webpack-merge");

function loadPresets({ presets = [], ...env } = {}) {
  const configs = [presets].flat().map((presetName) => {
    return require(`./presets/webpack.${presetName}`)(env);
  });

  return merge({}, ...configs);
}

module.exports = loadPresets;
