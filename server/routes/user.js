
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import bodyparser from 'body-parser';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';

import { User } from '../model/user.js';
import { verifyToken } from '../middleware/auth.js';
import userController from '../controllers/user.js'

const userRouter = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploads = multer({ storage });
const upload = multer({ storage });
userRouter.post('/signup', userController.userRegistation)
userRouter.put('/create-profile', userController.createUserProfile)
userRouter.post('/login', userController.userLogin)
userRouter.get('/get-all-Users', verifyToken, userController.seeAllUser)
// userRouter.put('/update-profile', updateUserProfile)
userRouter.put('/reset-password', verifyToken, userController.updateUserPassword)
// userRouter.put('/forgot-password', UserForgetPassword)



export default userRouter