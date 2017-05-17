'use strict';

module.exports = function(sequelize, DataTypes) {
    const Photo = sequelize.define('Photo', {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        success: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Photo.belongsTo(models.User);
                Photo.belongsTo(models.Quest);
                Photo.belongsTo(models.Place);
            }
        }
    });

    return Photo;
};
