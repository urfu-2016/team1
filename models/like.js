'use strict';

module.exports = function(sequelize) {
    const Like = sequelize.define('Like', {}, {
        classMethods: {
            associate: function (models) {
                Like.belongsTo(models.User);
            }
        }
    });

    return Like;
};
