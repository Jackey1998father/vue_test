// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pages:{
    index:{
      //入口
      entry:'src/main.js'
    }

  },
  //开启代理服务器
  lintOnSave:false,
  // 开启代理服务器，方式一：
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器，方式二：
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',

        pathRewrite: {'^/api': ''}
        // ws: true,
        // changeOrigin: true
      },
      '/cars': {
        target: 'http://localhost:5001',
          
        pathRewrite: {'^/cars': ''}
        // ws: true,
        // changeOrigin: true
      }
    }
  }
  
};
