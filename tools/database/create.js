const models = require('../../models');

let data = [
    {
        title: 'Yekaterinburg',
        description: 'Quest about this city',
        banner: 'https://i.ytimg.com/vi/nPZze4Cis8M/maxresdefault.jpg',
        places: [
            {
                title: 'Храм',
                description: 'Покемонам вход воспрещен',
                path: 'https://upload.wikimedia.org/wikipedia/commons/b/be/343xrumek_oblsverdl.JPG',
                lat: 56.8442274,
                lng: 60.6089385
            },
            {
                title: 'Общажка',
                description: 'ТЫ НЕ ПОВЕРИШЬ НО ЭТО ОБЫЧНАЯ ОБЩАГА УРФУ',
                path: 'http://i.imgur.com/VPw5Xcig.jpg',
                lat: 56.8163002,
                lng: 60.6111633
            },
            {
                title: 'УрГУ',
                description: 'kek',
                path: 'http://ekburg.tv/uploads/55325b846bf06acd6a4ef221/univer2.jpg',
                lat: 56.8410852,
                lng: 60.6144095
            },
            {
                title: 'Палладиум',
                description: 'Мы здесь',
                path: 'http://red-group.ru/uploads/image/97e33af04903c2e728984525efd6cefa.JPG',
                lat: 56.8356474,
                lng: 60.5896645
            }
        ],
        comments: [
            {text: 'Awesome quest!'},
            {text: 'really cool'}
        ]
    }
];

function createDataForQuest(quest, questModel) {
    return Promise.all(
        quest.places.map(place => models.Place.create({
            title: place.title,
            description: place.description,
            lat: place.lat,
            lng: place.lng,
            path: place.path
        }).then(place => questModel.addPlace(place)))
    )
        .then(() => Promise.all(quest.comments.map(comment => models.Comment.create({
            text: comment.text
        }).then(commentModel => questModel.addComment(commentModel.dataValues.id)))));
}

models.sequelize.sync({force: true})
    .then(() => Promise.all(data.map(quest => models.Quest.create({
        title: quest.title,
        description: quest.description,
        banner: quest.banner
    }).then(questModel => createDataForQuest(quest, questModel)))));
