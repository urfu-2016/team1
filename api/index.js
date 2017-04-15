import express from 'express';

import quests from './quests';
import users from './users';

const router = express.Router();

router.use('/quests', quests);
router.use('/users', users);

export default router;
