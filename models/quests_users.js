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
            type: DataTypes.ARRAY(DataTypes.UUIDV1),
            defaultValue: null
        }
    }, {
        classMethods: {
            associate: function(models) {
                models.Quest.belongsToMany(models.User, {through: 'QuestsUsers'});
                models.User.belongsToMany(models.Quest, {through: 'QuestsUsers'});
            }
        }
    });

    return QuestsPlaces;
};

