const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    host: "0.0.0.0",
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      "/api": {
        // target: `https://caweb-uat.intra.sheca.com`, // 测试环境
        target: `http://127.0.0.1:8080`,
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/ca-management'
          "^/api": `/mock`,
        },
      },

      // localhost:8080/ff/api/login   ca-webxxxx/ca-mangxxx/login
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
