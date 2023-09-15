import mongoose from 'mongoose';


const createBatteryDetails= mongoose.Schema({
    purHistory: [{
        type: Date,
        default: new Date(),
    }],
    battery_id: String,
    efficiency: {
        type: Number,
        default: 100,
    },
    life: Number,


})  


export const Battery = mongoose.model('Battery', createBatteryDetails);





