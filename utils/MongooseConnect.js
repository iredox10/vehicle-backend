import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectMongoose = async () =>{
    try {
        const res = await mongoose.connect(
            "mongodb+srv://idreesadam200:iredox@cluster0.jcxb8on.mongodb.net/?retryWrites=true&w=majority" ||
            'mongodb://localhost/steadfast-vehicle-app'
        );
        console.log('connect to mongoose')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoose