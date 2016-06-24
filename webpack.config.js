var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ASSET_DIR = path.resolve(__dirname, 'src/assets');

var config = {
    context: __dirname + '/src',
    entry: {
        app: APP_DIR + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.css', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loaders: ['babel']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(jpg|png|svg)$/,
                exclude: [/node_modules/],
                loader: "file-loader?name=assets/[name].[ext]"
            }
        ]
    }
};

module.exports = config;