import express from "express";
import authMiddleware from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, userOrders } from "../controller/ordercontroller.js"; 

const orderRouter = express.Router();

orderRouter.post("/place",  placeOrder);
orderRouter.post("/usersorder",authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus)

export default orderRouter;