const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIB = [
    'axios', 'react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'bootstrap', 'jquery'
]

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIB
    },
    stats: 'errors-only',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_mudules',
                // loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/env', '@babel/react'],
                //     plugins: ['@babel/plugin-transform-runtime'],
                // },
            },
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /\.s?css$/,
            },
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                // include: path.join(__dirname, 'img'),
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: {
            name: "manifest",
        }
    },

}