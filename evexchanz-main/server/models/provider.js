import mongoose from 'mongoose';


const createProviderSchema= mongoose.Schema({
    MobNo: String,
    lat: String,
    lng: String,
    petrolpumpId: String,
    gstNo: String,
    Name: String, 
    placeId: String,
    email: String,
    orders: [],
    battery: [],
    userId: {
        type: String,
        required: true,

        validate: async (value) => {
            try {
                const result = await Provider.findOne({ id: value })
                if (result) throw new Error("duplicity detected: id :" + value);
            } catch (error) {
                throw new Error(error);
            }
    }
   }
    
}) 
 


export const Provider = mongoose.model('Provider', createProviderSchema);

