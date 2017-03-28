'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                presets: [
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-react')
                    ],
                },
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
    externals: [nodeExternals()],
    target: 'node',
    devtool: '#inline-cheap-module-source-map'
};

module.exports = config;
