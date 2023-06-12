import { Asset } from '../model/asset.js';

async function createAsset(body) {
  try {
    const response = await Asset.create(body);
    return { statusCode: 201, message: 'Asset Added Successfully' };
  } catch (error) {
    throw error;
  }
}
async function findAssetbyStatus(status) {
  try {
    var inStock = true
    if (status === 'inuse') {
      inStock = false
      // console.log(".....", inStock)
    }

    // console.log("instock........ ", inStock)
    const response = await Asset.findOne({ inStock });
    // console.log("asset is kkkkkkk", response)
    if (!response) {
      return { statusCode: 404, errMessage: 'No Asset found' };
    }
    return { statusCode: 201, assetData: response };
  } catch (error) {
    throw error;
  }
}


async function findExpiredAsset() {
  try {
    const cDate = new Date();
    const response = await Asset.find({ dateOfExpiry: { $lt: cDate } });
    if (!response) {
      return { statusCode: 404, errMessage: 'No Asset found' };
    }
    return { statusCode: 201, assetData: response };
  } catch (error) {
    throw error;
  }
}

async function findExpiringAsset() {
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
    if (!response) {
      return { statusCode: 404, errMessage: 'No Asset found' };
    }
    return { statusCode: 201, assetData: response };
  } catch (error) {
    throw error;
  }
}

async function findAssetInStock(stock) {
  try {
    const response = await Asset.find({ inStock: true });
    if (!response) {
      return { statusCode: 404, errMessage: 'No Asset found' };
    }
    return { statusCode: 201, assetData: response };
  } catch (error) {
    throw error;
  }
}

export default { createAsset, findAssetbyStatus, findExpiredAsset, findExpiringAsset, findAssetInStock, };
