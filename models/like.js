'use strict';

module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define('Like', {
        id:  {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Like.belongsTo(models.Comment);
            }
        }
    });

    return Like;
};
