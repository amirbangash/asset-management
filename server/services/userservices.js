import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'

import { createToken } from '../middleware/auth.js';
import { User } from '../model/user.js';
import bodyparser from 'body-parser';

dotenv.config();

const SENDER = process.env.SENDER;
const pass = process.env.PASS
// console.log("sender mail is ", SENDER);


async function createUser(body) {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function completeProfile(body) {
  try {
    const { email } = body
    const user = await User.updateOne({ email }, { new: true })
    return user

  } catch (error) {
    throw new Error(error.message)
  }
}

async function getUser(email, password) {
  try {
    let user = await User.findOne({ email });
    console.log(`user is ${user.name} ${user.email}`);
    if (!user) {
      return 'user does not exist';
    }
    const isValidUser = await bcrypt.compare(password, user.password);
    if (isValidUser) {
      const token = createToken(user);
      console.log(`yah the token is here ${token}`);
      const newuser = { user, token };
      console.log(`new user is ${newuser}`);
      return { user, token };
    } else {
      return { user: false };
    }
  } catch (error) {
    throw error;
  }
}

async function updateUser(body) {
  try {
    const user = await User.findOneAndUpdate({ email: body.email }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
}

const updatePassword = async (newPassword, id) => {
  try {
    const filter = { _id: id };
    const user = await User.findOne(filter)
    const hashedPassword = user.password
    const passwordMatch = await bcrypt.compare(newPassword, hashedPassword)
    if (passwordMatch) {
      return { message: 'you are using the old password' }
    }
    newPassword = await bcrypt.hash(newPassword, 10)
    console.log(newPassword)
    const update = { password: newPassword };
    const res = await User.updateOne(filter, update);
    return { message: 'updated' };
  } catch (error) {
    throw error;
  }
};

async function forgetPassword(body) {
  const user = await User.findOne({ email: body.email })
  if (!user) {
    // return JSON.stringify('This email does not exist')
    return { message: 'This email does not exist' };
  }
  // create transporter
  let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: SENDER,
      pass: 'Akhtar@09'
    }
  });

  // generate random verification code
  let verificationCode = Math.floor(100000 + Math.random() * 900000);

  // setup email data
  let mailOptions = {
    from: SENDER,
    to: user.email,
    subject: 'Verification Code',
    text: `Your verification code is ${verificationCode}.`
  };

  // send email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    else {
      return { 'Email sent: ': info.response }
    }
  });

}
async function getAllUser(page, limit) {
  try {
    const skip = (page - 1) * limit;
    const user = await User.find({}, { password: 0 }).skip(skip).limit(limit);
    return user;
  } catch (error) {
    throw error;
  }
}

export { createUser, updateUser, getUser, getAllUser, updatePassword, forgetPassword, completeProfile };
