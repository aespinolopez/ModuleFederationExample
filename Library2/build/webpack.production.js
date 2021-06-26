module.exports = (env) => {
  return {
    devtool: "nosources-source-map",
    optimization: {
      concatenateModules: false, // TODO: remove when real build needed
    },
  };
};
