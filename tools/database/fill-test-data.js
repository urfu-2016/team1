'use strict';
const models = require('../../models');
const data = require('./test-data');

function getPromisesForCreateEntities (model, array) {
    let promises = array.map(function(dto) {
        return model.create(dto);
    });

    return Promise.all(promises);
}

models.sequelize.sync({ force: true }).then(function(err) {
    models.sequelize.Promise.all([
            getPromisesForCreateEntities(models.User, data.users),
            getPromisesForCreateEntities(models.Quest, data.quests),
            getPromisesForCreateEntities(models.Place, data.places),
            getPromisesForCreateEntities(models.Photo, data.photos),
            getPromisesForCreateEntities(models.Comment, data.comments),
            getPromisesForCreateEntities(models.Like, data.likes)
        ]).spread(function (users, quests, places, photos, comments, likes) {
            quests.forEach(function (quest, index) {
                let copyPlaces = places.slice();
                copyPlaces.splice(index, 1);
                quest.addPlaces(copyPlaces);
            });

            quests.forEach(function (quest, index) {
                const user = users[index%users.length];
                user.addQuest(quest, { owner : true });
            });

            photos.forEach(function (photo, index) {
                const user = users[index%users.length];
                const place = places[index%places.length];
                const quest = quests[index%quests.length];

                photo.setUser(user);
                photo.setPlace(place);
                photo.setQuest(quest);
            });

            comments.forEach(function (comment, index) {
                const user = users[index%users.length];
                comment.setUser(user);
            });
        });
});
