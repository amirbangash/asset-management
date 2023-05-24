import mongoose from 'mongoose';

const trackingSchema = new mongoose.Schema({
  assetId: {
    type: String,
  },
  userId: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: String,
  },
});

export const Track = mongoose.model('assets_tracking', trackingSchema);
