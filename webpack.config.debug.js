var webpack = require('webpack');
var base = require('./webpack.config.base');
var _ = require('lodash');

var config = _.merge(base, {
    devtool: 'eval',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: 'true'
        })
    ]
});

module.exports = config;
