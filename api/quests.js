import express from 'express';
import cloudinary from 'cloudinary';
import multer from 'multer';

import models from '../models';
import { getQuestsByName, makeMap, catchAsync } from './utils';

const IMAGE_PLUG = 'http://diskaunter44.ru/image/cache/catalog/photo/1783890_0-500x500.jpg';

const upload = multer({dest: '.tmp/img/'});
const router = express.Router();

router.get('/', function (req, res) {
    models.Quest.findAll()
        .then(quests => res.json(quests));
});

router.get('/id/:id', function (req, res) {
    const id = req.params.id;
    models.Quest.findById(id)
        .then(quest => res.json(quest));
});

router.get('/place/id/:id', function (req, res) {
    const id = req.params.id;
    models.Quest.findById(id)
        .then(places => places.getPlaces())
        .then(place => res.json(place));
});


router.get('/name/:name', function (req, res) {
    models.Quest.findAll()
        .then(quests => res.json(getQuestsByName(quests, req.params.name)));
});

function uploadFile(file) {
    return cloudinary.uploader.upload(file.path)
        .then(result => ({name: file.fieldname, path: result.secure_url}));
}

router.post('/create', upload.any(), catchAsync(200, async req => {
    let quest = req.body.quest;
    let places = req.body.places;

    let files = await Promise.all(req.files.map(uploadFile)).then(makeMap(x => x.name));

    let questModel = await models.Quest.create({
        title: quest.title,
        description: quest.description,
        banner: files[quest.file] ? files[quest.file].path : IMAGE_PLUG,
        author: req.user.id
    });

    let placeModels = await Promise.all(places.map(place => models.Place.create({
        title: place.title,
        description: place.description,
        lat: place.lat,
        lng: place.lng,
        path: files[place.file] ? files[place.file].path : IMAGE_PLUG
    })));

    await Promise.all(placeModels.map(place => questModel.addPlace(place)));
}));

router.post('/edit/:id', upload.any(), catchAsync(200, async req => {
    let quest = req.body.quest;
    let places = req.body.places;

    let files = await Promise.all(req.files.map(uploadFile)).then(makeMap(x => x.name));

    let questModel = await models.Quest.update({
        title: quest.title,
        description: quest.description,
        banner: files[quest.file] ? files[quest.file].path : 'http://diskaunter44.ru/image/cache/catalog/photo/1783890_0-500x500.jpg',
        author: req.user.id
    }, {where: {id : req.params.id}});

    let placeModels = await Promise.all(places.map(place => models.Place.create({
        title: place.title,
        description: place.description,
        coordinates: place.coordinates,
        path: files[place.file] ? files[place.file].path : 'http://diskaunter44.ru/image/cache/catalog/photo/1783890_0-500x500.jpg'
    })));

    await Promise.all(placeModels.map(place => questModel.addPlace(place)));
}));

router.post('/delete/:id', function (req, res) {
    const author = req.body.author;
    if (parseInt(author) === parseInt(req.user.id)) {
        models.Quest.destroy({where: {id: req.params.id}})
            .then((rowDeleted) => {
                if (rowDeleted === 1) {
                    res.send(true);
                }
            });
    }
});

router.get('/author/:id', catchAsync(200, async req => {
    return await models.Quest.findAll({where: {author: req.params.id}})
}));

router.get('/progress/:id', catchAsync(200, async req => {
    const currentUser = await models.User.findById(req.params.id);
    return await currentUser.getQuests();
}));

router.post('/pass/id/:id', catchAsync(201, async req => {
    let placeID = req.body.placeID;
    let questID = req.body.questID;
    let trueLat = req.body.trueCord.lat;
    let trueLng = req.body.trueCord.lng;
    let newLat = req.body.newCord.lat;
    let newLng = req.body.newCord.lng;

    let lat = ((trueLat + 0.0001 > newLat) && (trueLat - 0.0001 < newLat));
    let lng = ((trueLng + 0.0001 > newLng) && (trueLng - 0.0001 < newLng));

    if (lat && lng) {
        let photo = await models.Photo.create({
            url: '',
            success: true,
            UserId: req.user.id,
            QuestId: questID,
            PlaceId: placeID
        });

        return {success: true, placeID: placeID};
    }

    return {success: false, placeID: placeID};

}));

router.get('/passed/id/:id', (req, res)=> {
    const id = req.params.id;

    let photo = models.Photo.findAll({
        where: {
            $and: [
                {UserId: req.user.id},
                {QuestId: id}
            ]
        }
    })
        .then(photo => res.json(photo));
});

export default router;
