'use strict';
var Sequelize = require('sequelize');
var initializeDb = require('./init').init;

initializeDb(function (sequelize) {

    var Like = sequelize.define('like', {
        id:  {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        }
    });

    Comment.belongsTo(User); // Will add a userId attribute to Comment to hold the primary key value for User

    Quest.belongsToMany(Place, {through: 'QuestPlace'});
    Place.belongsToMany(Quest, {through: 'QuestPlace'});



    quest.sync({ force: true })
        .then(function () {
            quest.create({
                title: 'FirstQuest',
                description: 'no description'
            });
        })
        .catch(function (err) {
            throw err;
        });

    module.exports.Quest = quest;
});
