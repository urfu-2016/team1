'use strict';

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        vkId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fbId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fullPhoto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return User;
};
