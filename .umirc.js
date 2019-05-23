const routers = require("./src/router");
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'react-ssd',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  // 这里配置代理，下面的意思是当api请求有/mock时会自动设置到目标链接，主要用于解决跨域问题。
  proxy: {
    "/mock": {
      target: "http://service.schhsw.com:7300/",
      changeOrigin: true,
      // "pathRewrite": { "^/api": "" }
    }
  },
   routes:routers.PageRouters
}
