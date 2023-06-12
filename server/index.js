import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import { METHODS } from 'http';
import dotenv from 'dotenv';

import connect from './config/database.js'

import userRouter from './routes/user.js';
import assetRouter from './routes/asset.js';
// import trackingRouter from './routes/tracking.js';

dotenv.config();
mongoose.set('strictQuery', true);
const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGOURI);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    METHODS: "GET, POST, PUT, PATCH, DELETE"
}));
app.use('/user', userRouter);
app.use('/asset', assetRouter);
// app.use('/tracking', trackingRouter);
app.all('*', (req, res) => {
    res.status(404).send('404! Page not found');
});
app.all('*', (req, res) => {
    res.status(404).send('404! Page not found');
});
const PORT = process.env.PORT || 2000;
app.listen(PORT);
console.log(`server is running on PORT ${PORT}`);