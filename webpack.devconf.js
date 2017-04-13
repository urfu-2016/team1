'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function pathResolve(yourPath) {
    return path.resolve(__dirname, yourPath);
}

module.exports = {
    context: __dirname,

    entry: {
        index: './views/index'
    },

    output: {
        path: pathResolve('public'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        library: '[name]'
    },

    devtool: "cheap-source-map",

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.css']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js']
    },

    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {}
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-runtime', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.pcss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style', use: 'css?importLoaders=1!postcss' })
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=img/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            ReactDOM:   'react-dom',
            React:      'react',
            PropTypes:  'prop-types'
        })
    ],

    watch: true,

    watchOptions: {
        aggregateTimeout: 100,
        ignored: /node_modules/
    }
};
