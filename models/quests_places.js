'use strict';

module.exports = function(sequelize, DataTypes) {
    var QuestsPlaces = sequelize.define('QuestPlace', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
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
