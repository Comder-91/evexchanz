import express from "express";
import { Provider } from "../models/provider.js";
import { Client }   from "../models/client.js"
import { Battery } from "../models/battery.js";


const router = express.Router();

export const createProvider = async (req, res) => {

    const {
    MobNo,
    lat,
    lng,
    petrolpumpId,
    gstNo,
    Name, 
    userId,
    placeId }= req.body;
    const newProvider = new Provider({MobNo,lat,lng,petrolpumpId,gstNo,Name,userId,placeId})
    

    try {
        newProvider.save();

        res.status(201).json(newProvider );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getProvider= async(req,res)=>{
    const {userId}= req.params;
    try{
        const post= await Provider.find({"userId": userId});

        res.status(200).json(post);
    }
    catch(error){
        res.status(404).json({message: error.message});
        

    }


}

export const pushOrder=async(req,res)=>{
    const {place_id}=req.params;
    const {Name,MobNo,Address,email}=req.body;
    const newClient= new Client({Name,MobNo,Address,email});
    Provider.updateOne(
        { placeId: place_id },
        { $push: { orders : newClient } },
        function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
        }
    );
}


export const getOrders= async(req,res)=>{
    const {userId}=req.params;
    try{
        const provider=await Provider.find({"userId": userId})
        res.status(200).json(provider);

    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

export const getBatteries= async(req,res)=>{
    const {userId}=req.params;
    try{
        const provider=await Provider.find({"userId": userId})
        res.status(200).json(provider);

    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}


export const pushBattery=async(req,res)=>{
    const {userId}=req.params;
    const {battery_id,life,efficiency,brand}=req.body;
    const newBattery= new Battery({battery_id,life,efficiency,brand});
    Provider.updateOne(
        { userId: userId },
        { $push: { battery : newBattery } },
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