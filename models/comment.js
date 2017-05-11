'use strict';

module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Comment.hasMany(models.Like);
                Comment.belongsTo(models.User);
                Comment.belongsTo(models.Quest);
            }
        }
    });

    return Comment;
};
