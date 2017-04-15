'use strict';

module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define('Place',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        coordinates: {
            type: DataTypes.GEOGRAPHY,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                /*Task.belongsTo(models.User, {
                 onDelete: "CASCADE",
                 foreignKey: {
                 allowNull: false
                 }
                 });*/
            }
        }
    });

    return Place;
};
