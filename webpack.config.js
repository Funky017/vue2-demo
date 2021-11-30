// var HtmlWebPackPlugin = require('html-webpack-pkugin')
module.exports = {
    resolve: {
        alias: {
            "@": require("path").resolve(__dirname, "src")
        }
    },
    // 页面入口配置
    entry: {
        index: './src/app.js'
    },
    // 入口文件输出配置
    output: {
        path: './dist', //  输出目录
        filename: '[name].[hash].js'   // 加入hash值避免缓存导致用户没有更新新的js
    },
    module: {
        // 加载容器配置
        loaders: [
            {
                test: /\.js$/,      // 匹配规则
                loader: 'babel',    // 处理器
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue',    // 处理器
            }
        ],
        rules: {
            test: /\.scss$/,
            loaders: ['style','css','sass']
        }
    },
    // webpage插件
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         filename: 'index.html',
    //         template: 'index.html',
    //         inject: true
    //     })
    // ]


}