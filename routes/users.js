import express from 'express';

import {
	updateUser,
	deleteUser,
	getUser,
	getUsers,
} from '../controllers/user.js';
import { verifyUser, verifyAdmin } from '../middleware/authorization.js';

const router = express.Router();

// UPDATE
router.put('/:userId', verifyUser, updateUser);

// DELETE
router.delete('/userId', verifyUser, deleteUser);

// GET
router.get('/:userId', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
