import express from 'express';

import {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotel,
	getAllHotels,
} from '../controllers/hotel.js';

const router = express.Router();

router.route('/').post(createHotel).get(getAllHotels);
router.route('/hotelId').put(updateHotel).delete(deleteHotel).get(getHotel);

export default router;
