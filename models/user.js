'use strict';

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return User;
};
