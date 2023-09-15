import express from "express";
import mongoose from "mongoose";
import { Client }   from "../models/client.js"


const router= express.Router();

export const getClient= async(req,res)=>{
    const {userId}= req.params;
    try{
        const client= await Client.find({"userId": userId});
        res.status(200).json(client);
    }
    
    catch(error){
        res.status(404).json({message: error.message});
    }

}

export const createClient= async(req,res)=>{
    const {email,MobNo,Name,userId,Address}=req.body;
    const newClient = new Client({email,MobNo,Name,userId,Address})

    try {
        await newClient.save();
        res.status(201).json(newClient );

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateOrder = async(req,res) =>{
    const {userId} =req.params;

    const client = await Client.find({'userId': userId});
    const {id}=req.body;
    const newOrder= new Date();
    Client.updateOne(
        { userId: userId },
        { $push: { order : newOrder } },
        function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
        }
    );
    
}
