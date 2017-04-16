'use strict';

module.exports = function(sequelize, DataTypes) {
    var Quest = sequelize.define('Quest', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Quest.hasMany(models.Comment, {as: 'Comments'});
            }
        }
    });

    return Quest;
};
