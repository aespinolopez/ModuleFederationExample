const path = require("path");

module.exports = (env) => ({
  devServer: {
    contentBase: path.join(__dirname, "../../assets"),
    contentBasePublicPath: "/assets",
    compress: true,
    port: 3001,
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
