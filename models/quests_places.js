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
                models.Quest.belongsToMany(models.Place, {through: 'QuestPlace'});
                models.Place.belongsToMany(models.Quest, {through: 'QuestPlace'});
            }
        }
    });

    return QuestsPlaces;
};
