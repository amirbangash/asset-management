import express from 'express';
import { Asset } from '../model/asset.js';
import { Track } from '../model/trackingmodel.js';
import { User } from '../model/user.js';

async function createtracking(assetId, userId, status) {
  try {
    const asset = await Asset.findOne({ _id: assetId });
    if (asset) {
      if (asset.inStock && status === 'issued') {
        const response = await Track.create({ assetId, userId, status });
        await Asset.updateOne({ _id: assetId }, { $set: { inStock: false } });
        return response;
      } else if (!asset.inStock && status === 'return') {
        const response = await Track.create({ assetId, userId, status });
        await Asset.updateOne({ _id: assetId }, { $set: { inStock: true } });
        return response;
      } else {
        throw { message: 'Asset not available!' };
      }
    } else {
      throw new Error('Asset not exist, bad request');
    }
  } catch (error) {
    throw error;
  }
}

async function trackAsset(id) {
  try {
    const asset = await Asset.findOne({ _id: id });

    const data = {
      id: asset._id,
      name: asset.officeTag + asset.itemTag,
      description: asset.itemDescription,
      status: asset.status,
      location: asset.location,
    };

    return data;
  } catch (error) {
    throw error;
  }
}

async function trackAssetbydays(days) {
  const date = new Date();
  const gDate = new Date(date.getTime());
  gDate.setDate(date.getDate() - days);
  const result = await Asset.find(
    {
      $and: [
        { dateOfIssuance: { $gte: gDate } },
        { dateOfIssuance: { $lte: date } },
      ],
    },
    { officeTag: 1, itemTag: 1, assignedTo: 1, dateOfIssuance: 1 }
  ).sort({ itemTag: 1 });
  if (result.length) {
    console.log(result);
    return result;
  }
  return;
}

export { trackAsset, createtracking, trackAssetbydays };
