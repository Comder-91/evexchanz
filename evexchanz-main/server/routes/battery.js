import express from 'express'

import { getBattery,createBattery,pushDetails} from '../controllers/battery.js';


const router= express.Router();

router.post("/",createBattery);
router.get("/:battery_id",getBattery);
router.patch("/:battery_id",pushDetails);




export default router;