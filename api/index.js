import express from 'express';

import quests from './quests';
import users from './users';
import auth from './auth';

const router = express.Router();

router.use('/quests', quests);
router.use('/users', users);
router.use('/auth', auth);

export default router;
