import express from "express";
import { OrderItemController } from "./orderItem.controller";

const router = express.Router();

router.post("/orderItems", OrderItemController.createOrderItem);

export const OrderItemRoutes = router;
