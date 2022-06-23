import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import hotelsRoutes from './routes/hotels.js';
import roomsRoutes from './routes/rooms.js';

const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected');
});

mongoose.connection.on('connected', () => {
	console.log('MongoDB connected');
});

// middlewares
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/hotels', hotelsRoutes);
app.use('/api/v1/rooms', roomsRoutes);

app.listen(8800, () => {
	console.log('Connected to server');
});
