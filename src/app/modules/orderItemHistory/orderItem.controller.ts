import { Request, Response } from "express";
import { OrderItemServices } from "./orderItem.service";
import { ProductServices } from "../products/product.service";

const createOrderItem = async (req: Request, res: Response) => {
  try {
    const orderItem = req.body;
    const result = await OrderItemServices.createOrderItemIntoDB(orderItem);
    await Promise.all(
      orderItem.items.map(
        async (item: { _id: string; requiredQty: number }) => {
          // Fetch the current product details
          const product = await ProductServices.getProductByIdFromDB(item._id);
          if (product) {
            // Calculate the new quantity
            const newQuantity = product.quantity - item.requiredQty;

            // Update the product quantity
            if (newQuantity >= 0) {
              product.quantity = newQuantity;
              await ProductServices.updateProductByIdInDB(item._id, {
                quantity: newQuantity,
              });
            } else {
              // Handle case where quantity goes negative
              throw new Error(`Not enough stock for product ${item._id}`);
            }
          } else {
            throw new Error(`Product ${item._id} not found`);
          }
        }
      )
    );
    res.status(200).json({
      success: true,
      message: "Order item created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const OrderItemController = {
  createOrderItem,
};
