import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routes/emailRoute.js';

const app = express();

dotenv.config();

app.use(cors({
  origin: ['https://shreenarayanicastings.com','https://www.shreenarayanicastings.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/email', router);
app.use('/contact', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});