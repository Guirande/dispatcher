module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://meceap.tk:8084/RestAPI-2ibi",
        pathRewrite: { "^/api/": "/api/" },
        changeOrigin: true,
        logLevel: "debug"
      }
    }
  }
};
