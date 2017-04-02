'use strict';

module.exports = {
    plugins: [
        require('postcss-smart-import'),
        require("stylelint"),
        require("postcss-reporter")({ clearMessages: true }),
        require('precss'),
        require('autoprefixer')({
            browsers: ['last 3 versions', '>5%']
        }),
    ]
};
