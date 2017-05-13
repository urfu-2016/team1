import express from 'express';
import cloudinary from 'cloudinary';
import multer from 'multer';

import models from '../models';
import { getQuestsByName, makeMap, catchAsync } from './utils';

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
        banner: files[quest.file] ? files[quest.file].path : 'http://diskaunter44.ru/image/cache/catalog/photo/1783890_0-500x500.jpg'
    });

    let placeModels = await Promise.all(places.map(place => models.Place.create({
        title: place.title,
        description: place.description,
        coordinates: place.coordinates,
        path: files[place.file] ? files[place.file].path : 'http://diskaunter44.ru/image/cache/catalog/photo/1783890_0-500x500.jpg'
    })));

    await Promise.all(placeModels.map(place => questModel.addPlace(place)));
}));

export default router;
