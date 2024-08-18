import { OrderItem } from "./orderItem.interface";
import { OrderItemModel } from "./orderItem.model";

const createOrderItemIntoDB = async (orderItem: OrderItem) => {
  const result = await OrderItemModel.create(orderItem);
  return result;
};

export const OrderItemServices = {
  createOrderItemIntoDB,
};
