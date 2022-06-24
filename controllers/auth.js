import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { createError } from '../utils/error.js';

export const register = async (req, res, next) => {
	const { username, email, password } = req.body;
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new User({
			username,
			email,
			password: hash,
		});
		await newUser.save();
		res.status(200).json({ msg: 'User has been created' });
	} catch (err) {
		next(err);
	}
};

export const login = async (req, res, next) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username });
		if (!user) return next(createError(404, 'User not found!'));

		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect)
			return next(createError(400, 'Wrong password or username!'));

		const { password, isAdmin, ...responseDetails } = user._doc;
		res.status(200).json({ ...responseDetails });
	} catch (err) {
		next(err);
	}
};
