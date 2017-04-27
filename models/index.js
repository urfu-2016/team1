const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING || process.env.CONNECTION_STRING);

const models = {
    Comment: require('./comment')(sequelize, Sequelize.DataTypes),
    Like: require('./like')(sequelize, Sequelize.DataTypes),
    Photo: require('./photo')(sequelize, Sequelize.DataTypes),
    Place: require('./place')(sequelize, Sequelize.DataTypes),
    Quest: require('./quest')(sequelize, Sequelize.DataTypes),
    QuestPlace: require('./quest_place')(sequelize, Sequelize.DataTypes),
    QuestUser: require('./quest_user')(sequelize, Sequelize.DataTypes),
    User: require('./user')(sequelize, Sequelize.DataTypes),
    EntityComment: require('./entity_comment')(sequelize, Sequelize.DataTypes)
};

Object.keys(models).forEach(function(modelName) {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
