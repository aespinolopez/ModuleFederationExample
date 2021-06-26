const { merge } = require("webpack-merge");

const loadPresets = require("./build/load_presets");
const commonConfig = require("./build/webpack.common");
const modeConfig = (env) => require(`./build/webpack.${env.mode}`)(env);

module.exports = (env = { mode: "development", presets: [] }) => {
  return merge(commonConfig(env), modeConfig(env), loadPresets(env), {
    cache: {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    },
  });
};
