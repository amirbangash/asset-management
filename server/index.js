import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import { METHODS } from 'http';
import dotenv from 'dotenv';


import userRouter from './routes/user.js';
import assetRouter from './routes/asset.js';
import trackingRouter from './routes/tracking.js';

dotenv.config();
mongoose.set('strictQuery', true);
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://0.0.0.0/company');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    METHODS: "GET, POST, PUT, PATCH, DELETE"
}));
app.use('/user', userRouter);
app.use('/asset', assetRouter);
app.use('/tracking', trackingRouter);
const PORT = process.env.PORT || 2000;
app.listen(PORT);
console.log(`server is running on PORT ${PORT}`);