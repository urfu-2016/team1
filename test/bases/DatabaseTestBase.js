import { bdd } from 'mocha-classes';

import models from '../../models/index';

const { before } = bdd;

export default class DatabaseTestBase {
    @before
    setUp() {
        models.sequelize.sync()
    }

    getQuestIdByName(name) {
        return models.Quest.findOne({where: {title: name}})
            .then(x => x.id);
    }

    createQuests(quests) {
        return models.Quest.truncate()
            .then(() => models.Quest.bulkCreate(quests));
    }

    createCommentsForQuest(comments, questId) {
        return models.Comment.truncate()
            .then(() => Promise.all(comments.map(x => models.Comment.create(x))))
            .then(commentModels => Promise.all(commentModels.map(x => x.setQuest(questId))));
    }
}
