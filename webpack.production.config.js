//__dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入自动生成页面的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        publicPath : "",
        filename: "[name]-[hash].js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)(\?.*)?$/,
                exclude: /node_modules/,
                loader: 'babel'//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader",{publicPath : '../'}), // publicPath 设置公共 图片路径
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin("this file created by ZC 2017/02/06") ,//在这个数组中new一个就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html",//new 一个这个插件的实例，并传入相关的参数
            title: 'Hello World app',
            minify:{ //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("css/[name]-[hash].css")
    ],

}