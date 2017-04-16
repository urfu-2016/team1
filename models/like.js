'use strict';

module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define('Like', {}, {
        classMethods: {
            associate: function(models) {
                Like.belongsTo(models.User);
            }
        }
    });

    return Like;
};
