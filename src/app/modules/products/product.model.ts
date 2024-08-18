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
  Mimages: {
    type: String,
    required: true,
  },
  images2: {
    type: String,
    required: true,
  },
  images3: {
    type: String,
    required: true,
  },
  images4: {
    type: String,
    required: true,
  },
  images5: {
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
