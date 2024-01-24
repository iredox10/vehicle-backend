import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectMongoose = async () =>{
    try {
        const res = await mongoose.connect(
        //   "mongodb://localhost/vehicle" ||
            process.env.MONGODB_URI
        );
        console.log('connect to mongoose')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoose