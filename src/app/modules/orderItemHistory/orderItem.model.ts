import { Schema, model } from "mongoose";
import { OrderItem } from "./orderItem.interface";

const orderItemSchema = new Schema<OrderItem>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: String,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  itemIds: {
    type: [String],
    required: true,
  },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      requiredQty: { type: Number, required: true },
      _id: { type: String, required: true },
    },
  ],
});

export const OrderItemModel = model<OrderItem>("OrderItems", orderItemSchema);
