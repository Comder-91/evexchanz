import express from "express";
import { Battery }   from "../models/battery.js"

const router = express.Router();

export const createBattery = async (req, res) => {

    const {battery_id,brand }= req.body;
    const newBattery = new Battery({battery_id,brand})
    

    try {
        newBattery.save();

        res.status(201).json(newBattery);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getBattery= async(req,res)=>{
    const {battery_id}= req.params;
    try{
        const battery= await Battery.find({"battery_id": battery_id});

        res.status(200).json(battery);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }


}

export const pushDetails=async(req,res)=>{
    const {battery_id}=req.params;
    const {userId}=req.body;
    const newClient= new Client({userId});
    Battery.updateOne(
        { id: id },
        { $push: { purHistory : newClient } },
        function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
        }
    );
}




export default router;