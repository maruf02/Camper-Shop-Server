import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (searchTerm?: string) => {
  //   const products = await ProductModel.find()
  let query = {};
  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
      ],
    };
  }
  const products = await ProductModel.find(query);
  ////////////////////
  return products;
};

////////////////////////////////////////////
const getAllProductsByPriceRangeFromDB = async (
  minPrice?: number,
  maxPrice?: number
) => {
  let query: any = {};

  if (minPrice !== undefined || maxPrice !== undefined) {
    query.price = {};

    if (minPrice !== undefined && !isNaN(minPrice)) {
      query.price.$gte = minPrice;
    }

    if (maxPrice !== undefined && !isNaN(maxPrice)) {
      query.price.$lte = maxPrice;
    }
  }

  const products = await ProductModel.find(query);

  return products;
};

// //////////////////////////////////
const getAllProductsByPriceSortFromDB = async (sortByPrice?: string) => {
  let sort: any = {};
  if (sortByPrice === "asc") {
    sort.price = 1; // ascending
  } else if (sortByPrice === "desc") {
    sort.price = -1; // descending
  }

  const products = await ProductModel.find().sort(sort);

  return products;
};

////////////////////////////
const getProductByIdFromDB = async (productId: string) => {
  const product = await ProductModel.findById(productId);
  return product;
};

const updateProductByIdInDB = async (
  productId: string,
  productData: Product
) => {
  const product = await ProductModel.findByIdAndUpdate(productId, productData, {
    new: true,
  });
  return product;
};

const deleteProductByIdFromDB = async (productId: string) => {
  const product = await ProductModel.findByIdAndDelete(productId);
  return product;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAllProductsByPriceRangeFromDB,
  getAllProductsByPriceSortFromDB,
  getProductByIdFromDB,
  updateProductByIdInDB,
  deleteProductByIdFromDB,
};
