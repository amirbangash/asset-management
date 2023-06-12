import express from 'express';
import assetService from '../services/asset.js';

const assetRouter = express.Router();

async function createAsset(req, res) {
  try {
    const { body } = req;
    console.log("name is", body.name)
    const asset = await assetService.createAsset(body);
    return res.status(asset.statusCode)
      .json({ msg: asset.message, asset: asset.asset, error: asset.errMessage });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function findAssetByStatus(req, res) {
  try {
    const { status } = req.params;
    const asset = await assetService.findAssetbyStatus(status);
    console.log("asset", asset)
    return res.status(asset.statusCode)
      .json({ msg: asset.message, asset: asset.assetData, error: asset.errMessage });
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ error: error.message });
  }
}

async function findExpiredAsset(req, res) {
  try {
    const { body } = req;
    const asset = await assetService.findExpiredAsset(body);
    return res.status(user.statusCode)
      .json({ msg: user.message, user: user.userData, error: user.errMessage });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
async function findExpiringAsset(req, res) {
  try {
    const { body } = req;
    const asset = await assetService.findExpiringAsset(body);
    return res.status(user.statusCode)
      .json({ msg: user.message, user: user.userData, error: user.errMessage });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
async function findAssetInStock(req, res) {
  try {
    const { body } = req;
    const asset = await assetService.findAssetInStock(body);
    return res.status(user.statusCode)
      .json({ msg: user.message, user: user.userData, error: user.errMessage });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
export default {
  createAsset, findAssetByStatus, findExpiredAsset, findExpiringAsset, findAssetInStock
}
