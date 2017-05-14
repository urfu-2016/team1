'use strict';

module.exports = function(sequelize, DataTypes) {
    const Quest = sequelize.define('Quest', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        banner: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        classMethods: {
            associate: function (models) {
                Quest.hasMany(models.Comment, {as: 'Comments'});
            }
        }
    });

    return Quest;
};
