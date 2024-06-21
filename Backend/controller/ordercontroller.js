import orderModel from "../models/OrderModel.js";
import userModel from "../models/userModel.js";
 


const placeOrder = async (req,res)=>{
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        res.json({
            success:true,
            message:"Item Order Successfully"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

// user order for frontend
const userOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find();
        res.json({
            success:true,
            data:orders
        })
    } catch (error) {
        console.log(erro);
        res.json({
            success:false, 
            message:"Error"
        })
    }
}

const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({
            success:true,
            data:orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

const updateStatus = async(req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({
            success:true,
            message:"Status updated"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

export {placeOrder,userOrders,listOrders,updateStatus};