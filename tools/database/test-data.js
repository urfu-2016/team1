'use strict';

const data = {};

data.users = [{
    login: 'JIM',
    password: 'a_secret'
},
{
    login: 'BIM',
    password: 'a_secret'
}];

data.quests = [{
    name: 'Elmash',
    description: 'description quest1'
},
{
    name: 'VIZ',
    description: 'description quest2'
},
{
    name: 'CENTER',
    description: 'description quest3'
}];

data.places = [{
    name: 'OFFICE YANDEX',
    description: 'Some description',
    coordinates: 'while string',
    photo:  'url for load photo'
},
{
    name: 'METRO URALMASH',
    description: 'Some description',
    coordinates: 'while string',
    photo:  'url for load photo'
},
{
    name: 'VIZ BULVAR',
    description: 'Some description',
    coordinates: 'while string',
    photo:  'url for load photo'
}];

data.comments = [{
    text: "some comment 1"
},
{
    text: "some comment 2"
},
{
    text: "some comment 3"
}];

data.likes = [{}, {}, {}, {}, {}];

module.exports = data;
