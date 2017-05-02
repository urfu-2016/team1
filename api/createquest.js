import express from 'express';
import cloudinary from 'cloudinary';
import multer from 'multer';

import models from '../models';

const upload = multer({ dest: '.tmp/img/' });
const router = express.Router();

function getPromisesForCreateEntities (model, array) {
    let promises = array.map(function(dto) {
        return model.create(dto);
    });

    return Promise.all(promises);
}

cloudinary.config({
    cloud_name: 'ds75i4clw',
    api_key: '537932879319483',
    api_secret: 'C8ohyAO2EgYgg0ay9oyr64P9Vr0'
});

router.post('/', upload.any(), function (req, res) {
    let files = [];
    let done = 0;

    req.files.forEach((file) => {
        let id = parseInt(file.fieldname);
        files[id] = {};
        files[id].path = file.path;
    });

    for (let i in req.body) {
        let data = i.split('-');
        let id = data[0];
        if (!files[id]) {
            files[id] = {}
        }
        files[id][data[1]] = req.body[i];
    }

    files.forEach((file) => {
        if (file.path) {
            cloudinary.uploader.upload(file.path, (result) => {
                file.path = result.secure_url;
                done++;

                if (done === files.length) {
                    let places = files.slice(1);
                    models.sequelize.Promise.all([
                        models.Quest.create({
                            title: files[0].title,
                            description: files[0].description,
                            banner: result.secure_url
                        }),
                        getPromisesForCreateEntities ( models.Place, places)
                    ]).spread(function (quest, places) {
                        places.forEach((place) => {
                            quest.addPlace(place);
                        });
                    })
                }
            });
        }

    });

    res.send(true);
});

export default router;
