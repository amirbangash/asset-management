import { Asset } from '../model/asset.js';

async function createAsset(body) {
  try {
    const response = await Asset.create({ body });
    return response;
  } catch (error) {
    throw error;
  }
}

async function getassetbylocation(location) {
  try {
    const response = await Asset.find({ location });
    return response;
  } catch (error) {
    throw error;
  }
}

async function getAssetbystatus(status) {
  try {
    const response = await Asset.find({ status });
    return response;
  } catch (error) {
    throw error;
  }
}

async function getExpired() {
  try {
    const cDate = new Date();
    const response = await Asset.find({ dateOfExpiry: { $lt: cDate } });

    return response;
  } catch (error) {
    throw error;
  }
}

async function expiring() {
  try {
    const cDate = new Date();
    const dateCopy = new Date(cDate.getTime());
    dateCopy.setDate(dateCopy.getDate() + 7);
    const response = await Asset.find({
      $and: [
        { dateOfExpiry: { $gt: cDate } },
        { dateOfExpiry: { $lt: dateCopy } },
      ],
    });
    return response;
  } catch (error) {
    throw error;
  }
}

async function stock(stock) {
  try {
    const response = await Asset.find({ inStock: true });
    return response;
  } catch (error) {
    throw error;
  }
}

export { createAsset, getExpired, expiring, stock, getAssetbystatus, getassetbylocation };
