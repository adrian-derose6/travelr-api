import express from 'express';

import {
	createRoom,
	updateRoom,
	updateRoomAvailability,
	deleteRoom,
	getRoom,
	getRooms,
} from '../controllers/room.js';
import { verifyAdmin } from '../middleware/authorization.js';

const router = express.Router();

// CREATE
router.post('/:hotelId', verifyAdmin, createRoom);

// UPDATE
router.put('/:roomId', verifyAdmin, updateRoom);
router.put('/availability/:roomNumberId', updateRoomAvailability);

// DELETE
router.delete('/:roomId/:hotelId', verifyAdmin, deleteRoom);

// GET
router.get('/:roomId', getRoom);

// GET ALL
router.get('/', getRooms);

export default router;
