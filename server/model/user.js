import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
    default: null,
    match: /^[a-zA-Z0-9_-]{3,16}$/

  },
  lastName: {
    type: String,
    default: null,
    // required: true,
    match: /^[a-zA-Z0-9_-]{3,16}$/

  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email',
    ],
  },
  password: {
    type: String,
    required: true,
    default: "admin",
    minLength: 8,
  },
  cnic: {
    type: Number,
    required: true,
    minLength: 13,
    maxLength: 13,
    default: null,
  },
  role: {
    type: String,
    default: "user",
    enum: ['user', 'admin']
  },
  phoneNo: {
    type: Number,
    default: null
  },

  level: {
    type: String,
    default: 0,
    enum: [0, 1, 2, 3, 4, 5]
  },

  team: {
    type: String,
    default: 'web development',
  },
  organization: {
    type: String,
    default: null,
  },

  image: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('users', userSchema); //This line
export { User }