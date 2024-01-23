import mongoose from "mongoose";

const connectMongoose = async () =>{
    try {
        await mongoose.connect(
          "mongodb://localhost/vehicle" ||
            "mongodb+srv://idreesadam200:iredox@cluster0.jcxb8on.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log('connect to mongoose')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoose