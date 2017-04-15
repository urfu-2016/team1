'use strict';

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const NODE_ENV = process.env.NODE_ENV || 'development';

function pathResolve(yourPath) {
    return path.resolve(__dirname, yourPath);
}

module.exports = {
    context: __dirname,

    entry: {
        server: './bin/www'
    },

    output: {
        path: pathResolve('bin'),
        publicPath: '/',
        filename: '[name].js',
        libraryTarget: "commonjs2"
    },

    target: 'node',

    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {}),

    node: {
        __filename: false,
        __dirname: false
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js']
    },

    module: {
        loaders: [
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
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=img/[name].[ext]'
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

    watch: NODE_ENV !== 'production',

    watchOptions: {
        aggregateTimeout: 100,
        ignored: /node_modules/
    }
};


