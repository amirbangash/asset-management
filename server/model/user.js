import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
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
  role: {
    type: String,
    default: "user",
    enum: ['user', 'admin']
  },
  phoneNo: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
    default: "admin",
    minLength: 8,


  },

  level: {
    type: String,
    default: null,
    enum: [0, 1, 2, 3, 4, 5]
  },
  cnic: {
    type: Number,
    required: true,
    minLength: 13,
    maxLength: 13,
    default: null,
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
userSchema.method({
  async authenticate(password) {
    return bcrypt.compare(password, this.hash_password);
  },
});
export const User = mongoose.model('users', userSchema); //This line
