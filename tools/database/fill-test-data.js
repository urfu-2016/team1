'use strict';
const models = require('../../models');
const data = require('./test-data');

function getTasksForCreateEntities (model, array) {
    let tasks = array.map(function(dto) {
        return model.create(dto);
    });

    return Promise.all(tasks);
}

models.sequelize.sync({ force: true }).then(function(err) {
    models.sequelize.Promise.all([
            getTasksForCreateEntities(models.User, data.users),
            getTasksForCreateEntities(models.Quest, data.quests),
            getTasksForCreateEntities(models.Place, data.places),
            getTasksForCreateEntities(models.Comment, data.comments),
            getTasksForCreateEntities(models.Like, data.likes)
        ]).spread(function (users, quests, places, comments, likes) {
            quests.forEach(function (quest, index) {
                let copyPlaces = places.slice();
                copyPlaces.splice(index, 1);
                quest.addPlaces(copyPlaces);
            });

            quests.forEach(function (quest, index) {
                const user = users[index%users.length];
                user.addQuest(quest, { owner : true });
            });
        });
});
