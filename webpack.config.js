var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    context: __dirname + '/src',
    entry: {
        app: APP_DIR + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ],
    resolve: [
        {
            modulesDirectories: ['node_modules'],
            extensions: ['', '.css', '.js', '.jsx', '.json']
        }
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loaders: ['babel']
            },
            {
                test: /\.(ttf|eot)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    limit: "65000",
                    name: 'assets/typefaces/[name].[ext]'
                }
            },
            {
                test: /\.otf?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader",
                query: {
                    limit: "65000",
                    name: "assets/typefaces/[name].[ext]"
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    limit: "65000",
                    name: "assets/typefaces/[name].[ext]"
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                exclude: [/node_modules/],
                loader: "file-loader?name=assets/[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    }
};

module.exports = config;
