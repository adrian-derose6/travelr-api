import express from 'express';

import {
	updateUser,
	deleteUser,
	getUser,
	getUsers,
} from '../controllers/hotel.js';
import { verifyToken, verifyUser } from '../middleware/authorization.js';

const router = express.Router();

router.route('/').post(createUser).get(getUsers);
router.route('/userId').put(updateUser).delete(deleteUser).get(getUser);

export default router;
