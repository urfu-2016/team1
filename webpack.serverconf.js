'use strict';

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

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

    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod
        return ext
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
        }),
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

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             properties: true,
    //             conditionals: true,
    //             loops: true,
    //             unused: true,
    //             collapse_vars: true,
    //             dead_code: true,
    //             drop_console: true,
    //             drop_debugger: true,
    //             warnings: false,
    //         }
    //     }),
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     new ExtractTextPlugin("[name].css"),
    //     new webpack.ProvidePlugin({
    //         ReactDOM:   'react-dom',
    //         React:      'react',
    //         PropTypes:  'react/lib/ReactPropTypes',
    //     }),
    //     new webpack.optimize.OccurrenceOrderPlugin()
    // ]
};


