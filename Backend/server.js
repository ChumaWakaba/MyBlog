import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Routes/UserRoute.js";
import blogRouter from "./Routes/BlogRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/user", router)
app.use("/api/blog", blogRouter)

mongoose.connect(process.env.MONGO_DB).then(()=>{
    app.listen(process.env.PORT, () => {
    console.log("App is listing to localhost and post number is", process.env.PORT);
})
}).catch((err) => {
    console.log(err);
});