import mongoose from "mongoose";

const file = new mongoose.Schema({
    name: String,
    content: String
})

const File = mongoose.model('file', file)
export default File
