module.exports = function(sequelize, DataTypes) {
    const EntityComment = sequelize.define('EntityComment', {
    }, {
        classMethods: {
            associate: function (models) {
                models.Comment.belongsToMany(models.Quest, {through: 'EntityComment'});
            }
        }
    });

    return EntityComment;
};
