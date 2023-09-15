import mongoose from "mongoose";

const clientSchema= mongoose.Schema({
    Name: String,
    MobNo: String,
    email: String,
    Addresss: String,
    count:{
        type: Number,
        default: 0,
    },
    userId: String,
    order: [{type: Date}]

})
const batteryClientSchema=mongoose.Schema({
    userId: String,
    date: Date,
    percentage: Number,
    lifetotal: Number, 
})

export const Client=mongoose.model("Client",clientSchema);