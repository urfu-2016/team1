'use strict';

module.exports = function(sequelize, DataTypes) {
    var QuestsUsers = sequelize.define('QuestsUsers', {
        owner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        foundPlace: {
            type: DataTypes.STRING,
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

    return QuestsUsers;
};

