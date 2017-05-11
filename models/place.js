'use strict';

module.exports = function(sequelize, DataTypes) {
    const Place = sequelize.define('Place', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        coordinates: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        classMethods: {
            associate: function (models) {
                Place.hasMany(models.Comment);
            }
        }
    });

    return Place;
};
