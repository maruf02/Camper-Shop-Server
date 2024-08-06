import { Schema, model } from "mongoose";
import { Product } from "./product.interface";

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});

// const productSchema = new Schema<Product>({
//   name: {
//     type: String,
//     required: true,
//   },
// })

export const ProductModel = model<Product>("Products", productSchema);
