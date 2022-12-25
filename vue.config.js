/**
 * 解决跨域问题
 * @type {{devServer: {proxy: {"/api": {changeOrigin: boolean, pathRewrite: {"^/api": string}, target: string}}, host: string, open: boolean}}}
 */
module.exports = {
    devServer: {
        port: 8081,
        host: 'localhost',
        open: false, // 自动打开浏览器
    }
}

