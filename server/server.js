import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';

config();

connectDB();

const app = express();

const corsOpts = {
	origin: 'http://localhost:5173',
};

app.use(cors(corsOpts));

app.get('/', (req, res) => {
	res.send('API is running');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.underline.bold
	)
);
