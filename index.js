import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routes/emailRoute.js';

const app = express();

dotenv.config();
// app.use(cors({
//   origin: '*',
// }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.use('/email', router);
app.use('/contact', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});