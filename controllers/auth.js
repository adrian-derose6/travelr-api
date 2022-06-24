import bcrypt from 'bcryptjs';

import User from '../models/User.js';

export const register = async (req, res, next) => {
	const { username, email, password } = req.body;
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);

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
