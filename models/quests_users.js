'use strict';

module.exports = function(sequelize, DataTypes) {
    var QuestsUsers = sequelize.define('QuestsUsers', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        owner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        foundPlace: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            defaultValue: null
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

    return QuestsPlaces;
};

