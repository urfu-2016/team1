'use strict';

module.exports = function(sequelize) {
    const QuestPlace = sequelize.define('QuestPlace', {}, {
        classMethods: {
            associate: function (models) {
                models.Quest.belongsToMany(models.Place, {through: 'QuestPlace'});
                models.Place.belongsToMany(models.Quest, {through: 'QuestPlace'});
            }
        }
    });

    return QuestPlace;
};
