'use strict';

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        id:  {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
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
