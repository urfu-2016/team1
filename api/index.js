import express from 'express';

import quests from './quests';
import users from './users';
import auth from './auth';
import comments from './comments';

const router = express.Router();

router.use('/quests', quests);
router.use('/users', users);
router.use('/auth', auth);
router.use('/comments', comments);

export default router;
