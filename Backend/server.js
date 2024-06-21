import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import foodrouter from "./routes/foodrouter.js"
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";
 
// app config
const app = express();
const port = 4000;

// middlewares

app.use(express.json());
app.use(cors());

// Lets connect to Database 

mongoose
.connect(process.env.MONGO_URL,{
    dbName: "Zomato_Clone"
})
.then(() => {
    console.log("Connection with Data Base is Established Sucessfully")
})
.catch((err) => console.log("Error with Connection with DataBAse", err));

// Api All Routes are here ...
app.use("/api/v1/zomato", foodrouter);
app.use("/images", express.static('uploads')) // to access the uploaded files 
app.use("/api/v1/zomato/user", userRouter)
app.use("/api/v1/zomato/cart", cartRouter)
app.use("/api/v1/zomato/order", orderRouter)

app.get("/", (req, res) => {
    res.send("Api is working")
}) 

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on Port:- ${port}`);
});