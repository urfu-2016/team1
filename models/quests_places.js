'use strict';

module.exports = function(sequelize, DataTypes) {
    var QuestsPlaces = sequelize.define('QuestPlace', {
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
