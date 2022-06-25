import express from 'express';

import {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotel,
	getHotels,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../middleware/authorization.js';

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel);

// UPDATE
router.put('/:hotelId', verifyAdmin, updateHotel);

// DELETE
router.delete('/:hotelId', verifyAdmin, deleteHotel);

// GET
router.get('/:hotelId', getHotel);

// GET ALL
router.get('/', getHotels);

export default router;
