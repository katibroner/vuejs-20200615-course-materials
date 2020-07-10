module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: process.env.API_PROXI_TARGET,
        changeOrigin: true,
      },
    },
  },
};
