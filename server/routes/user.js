
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import bodyparser from 'body-parser';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';

import { User } from '../model/user.js';
import { verifyToken } from '../middleware/auth.js';
import { validateUserCreate, validateUserProfile } from '../middleware/validation.js';

import {
    userRegistation, createUserProfile,
    userLogin, seeAllUser,
    updateUserPassword
} from '../controllers/user.js';
const userRouter = express.Router();

userRouter.post('/signup', validateUserCreate, userRegistation)
userRouter.put('/create-profile', validateUserProfile, createUserProfile)
userRouter.post('/login', userLogin)
userRouter.get('/get-all-Users', verifyToken, seeAllUser)
// userRouter.put('/update-profile', updateUserProfile)
userRouter.put('/update-password', verifyToken, updateUserPassword)
// userRouter.put('/forget-password', UserForgetPassword)


export default userRouter
