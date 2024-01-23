import mongoose from "mongoose";

const connectMongoose = async () =>{
    try {
        await mongoose.connect('mongodb://localhost/vehicle')
        console.log('connect to mongoose')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoose