// import express from 'express';

// import { trackAsset, createtracking, trackAssetbydays } from '../services/trackingservices.js';

// const trackingRouter = express.Router();

// trackingRouter.post('/createTracking', async (req, res) => {
//   try {
//     const { assetId, userId, status } = req.body;
//     const response = await createtracking(assetId, userId, status);
//     res.send(response);
//   } catch (error) {
//     res.status(404).send({ message: error.message });
//   }
// });

// trackingRouter.get('/trackAsset/:id', async (req, res) => {
//   const { id } = req.params;
//   const response = await trackAsset(id);
//   res.send(response);
// });

// trackingRouter.get('/trackByDate/:days', async (req, res) => {
//   const { days } = req.params;
//   const response = await trackAssetbydays(days);
//   res.send(response);
// });

// export default trackingRouter;
