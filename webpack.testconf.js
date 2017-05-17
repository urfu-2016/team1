'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    resolve: {
        modules: [path.resolve('./'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-runtime', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.(c|pc)ss$/,
                exclude: /node_modules/,
                loader: 'null-loader'
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            __dirname: JSON.stringify(__dirname),
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            ReactDOM:   'react-dom',
            React:      'react',
            PropTypes:  'prop-types'
        })
    ],

    externals: [nodeExternals()],
    target: 'node',
    devtool: '#inline-cheap-module-source-map'
};

module.exports = config;
