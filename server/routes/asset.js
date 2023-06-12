import express from 'express';
import assetController from '../controllers/asset.js';

const assetRouter = express.Router();

assetRouter.post('/create-asset', assetController.createAsset);
assetRouter.get('/get-asset-by-status/:status', assetController.findAssetByStatus);
assetRouter.get('/expired-asset', assetController.findExpiredAsset);
assetRouter.get('/expiring-in/:days', assetController.findExpiringAsset);
assetRouter.get('/in-stock', assetController.findAssetInStock);

export default assetRouter;