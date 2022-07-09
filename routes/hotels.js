import express from 'express';

import {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotel,
	getHotels,
	getHotelRooms,
	countByCity,
	countByType,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../middleware/authorization.js';

const router = express.Router();

// GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/:hotelId/rooms', getHotelRooms);

// CREATE
router.post('/', verifyAdmin, createHotel);

// UPDATE
router.put('/:hotelId', verifyAdmin, updateHotel);

// DELETE
router.delete('/:hotelId', verifyAdmin, deleteHotel);

// GET
router.get('/:hotelId', getHotel);

export default router;
