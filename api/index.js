const express = require('express');

const quests = require('./quests');
const users = require('./users');

const router = express.Router();

router.use('/quests', quests);
router.use('/users', users);

module.exports = router;
