export type OrderItem = {
  name: string;
  email: string;
  payment: string;
  phone: string;
  purchaseDate: string;
  totalItems: number;
  totalPrice: number;
  itemIds: string[];
  items: Array<{
    name: string;
    price: number;
    requiredQty: number;
    _id: string;
  }>;
};
