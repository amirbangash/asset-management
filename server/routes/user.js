
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import bodyparser from 'body-parser';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';

import { User } from '../model/user.js';
import { verifyToken } from '../middleware/auth.js';
import {
  createUser,
  updateUser,
  getUser,
  getAllUser,
  updatePassword,
  forgetPassword
  // updatePassword
} from '../services/userservices.js';




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

const result = [];
const readCSVFile = (csvFilePath) => {
  return new Promise((resolve, reject) => {
    const result = [];
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => result.push(data))
      .on('end', () => {
        console.log('Result:', result);
        resolve(result);
      })
      .on('error', (error) => reject(error));
  });
};

userRouter.post('/signup', async (req, res) => {
  try {
    const { body } = req;
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;
    const user = await createUser(body);
    return res.status(201).json({ user: 'Successfully registered' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await getUser(email, password);
    console.log("res", user);
    if (user) {
      return res
        .status(200)
        .json({ user: 'Successfully logged In..', token });
    } else {
      return res.status(400).json({ user: 'Invalid Email or Password' });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

userRouter.put('/updateProfile', async (req, res) => {
  try {
    const { body } = req;
    const user = await updateUser(body);
    return res.status(201).json({ user: "Profile updated successfully" });
  } catch (error) {
    // handle error
  }
});

userRouter.put('/updatePassword', verifyToken, async (req, res) => {
  try {
    const { id } = req.user;
    const { newPassword, confirm } = req.body
    if (newPassword === confirm) {
      const update = await updatePassword(newPassword, id);
      return res.status(201).json(update)
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
userRouter.put('/forgetPassword', async (req, res) => {
  try {
    const { body } = req
    const update = await forgetPassword(body)
    console.log(update)
    return res.status(201).json(update)
  } catch (error) {
    return res.status(400).json({ error: error.message })

  }
})

export default userRouter