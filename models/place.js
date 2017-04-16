'use strict';

module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define('Place',{
        name: {
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
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Place.hasMany(models.Comment);
            }
        }
    });

    return Place;
};
