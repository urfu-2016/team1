'use strict';

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Comment.hasMany(models.Like);
                Comment.belongsTo(models.User);
            }
        }
    });

    return Comment;
};
