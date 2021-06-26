const path = require("path");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode,
    context: path.resolve(__dirname, "../"),
    entry: "./src/index.mjs",
    target: "web",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "../dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new ModuleFederationPlugin({
        name: "main",
        remotes: {
          shell: "shell@http://localhost:3001/remoteEntry.js",
        },
      }),
    ],
  };
};
