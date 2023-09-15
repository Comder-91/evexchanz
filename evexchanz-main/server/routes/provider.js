import express from 'express'

import { getProvider,getBatteries,createProvider,pushOrder,getOrders,pushBattery } from '../controllers/provider.js';


const router= express.Router();
router.post("/",createProvider);
router.get("/:userId",getProvider);
router.patch("/:place_id",pushOrder);
router.get("/order/:userId",getOrders);
router.patch('/battery/:userId',pushBattery);
router.get('/batterydetails/:userId',getBatteries);


export default router;