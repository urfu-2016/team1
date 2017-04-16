'use strict';

module.exports = function(sequelize, DataTypes) {
    var QuestUser = sequelize.define('QuestUser', {
        owner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                models.Quest.belongsToMany(models.User, {through: 'QuestUser'});
                models.User.belongsToMany(models.Quest, {through: 'QuestUser'});
            }
        }
    });

    return QuestUser;
};

