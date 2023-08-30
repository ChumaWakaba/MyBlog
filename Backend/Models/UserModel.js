import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    blogs: [{
        type: mongoose.Types.ObjectId, 
        ref:"Blogs", 
        required: true
    }]
});

export default mongoose.model("User", userSchema);