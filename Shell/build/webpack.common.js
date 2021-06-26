const path = require("path");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode,
    context: path.resolve(__dirname, "../"),
    entry: "./src/index.jsx",
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
        name: "shell",
        filename: "remoteEntry.js",
        remotes: {
          library1: "library1@http://localhost:3002/remoteEntry.js",
          library2: "library2@http://localhost:3003/remoteEntry.js",
        },
        exposes: {
          ".": "./src/index.jsx",
        },
        shared: {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
        },
      }),
    ],
  };
};
