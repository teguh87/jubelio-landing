const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const webpackDashboard = require('webpack-dashboard/plugin');


module.exports = {
    watch: true,
    // devtool: "source-map",
    // target: 'web',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },    
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader!sass-loader",
                })
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.NewWatchingPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpackDashboard()
    ],
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        compress: true,
        inline: true,
        port: 8080
    }

}
