import express from 'express';

import {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotel,
	getHotels,
	countByCity,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../middleware/authorization.js';

const router = express.Router();

// GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', getHotels);

// CREATE
router.post('/', verifyAdmin, createHotel);

// UPDATE
router.put('/:hotelId', verifyAdmin, updateHotel);

// DELETE
router.delete('/:hotelId', verifyAdmin, deleteHotel);

// GET
router.get('/:hotelId', getHotel);

export default router;
