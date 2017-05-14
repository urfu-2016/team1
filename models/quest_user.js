'use strict';

module.exports = function(sequelize, DataTypes) {
    const QuestUser = sequelize.define('QuestUser', {},
        {
        classMethods: {
            associate: function (models) {
                models.Quest.belongsToMany(models.User, {through: 'QuestUser'});
                models.User.belongsToMany(models.Quest, {through: 'QuestUser'});
            }
        }
    });

    return QuestUser;
};

