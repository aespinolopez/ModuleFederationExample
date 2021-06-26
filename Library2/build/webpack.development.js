const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    devtool: "eval-source-map",
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
      ],
    },
    plugins: [],
  };
};
