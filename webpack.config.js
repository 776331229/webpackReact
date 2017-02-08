//__dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入自动生成页面的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        publicPath: "/",//打包后的文件存放的地方
        filename: "[name]-[hash].js",//打包后输出文件的文件名
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
                loader: "style!css-loader!postcss"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    postcss: [
        require('autoprefixer') //调用autoprefixer插件
    ],
    devServer: {
        port:8000,
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
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
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new ExtractTextPlugin("[name]-[hash].css")
    ],

}