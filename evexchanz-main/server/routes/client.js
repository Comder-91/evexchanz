import express from 'express'

import { getClient,createClient,updateOrder} from '../controllers/client.js';


const router= express.Router();
router.post("/",createClient);
router.get("/:userId",getClient);
router.patch("/:userId",updateOrder);



export default router;