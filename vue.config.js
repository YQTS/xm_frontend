const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8100',  // 请求的第三方接口
        secure: false,   //如果是http接口，需要配置该参数
        ws: false,  // proxy websockets，访问网关，使用http的连接方式进行socket信息推送
        changeOrigin: true,  // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {  // 路径重写，
          '^api': ''
        }
      }
    }
  }
})
