import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    items:{
        type:Array,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:Object,
        require:true
    },
    status:{
        type:String,
        default:"Food Processing"
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:true
    }

});

const orderModel = mongoose.model("order", orderShema);
export default orderModel;