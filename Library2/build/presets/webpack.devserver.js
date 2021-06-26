const path = require("path");

module.exports = (env) => ({
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3003,
    open: false,
  },
});
