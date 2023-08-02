import mongoose from 'mongoose';
import { orderSchema } from "../schemas/order";

const { Model } = mongoose;

const Order = new Model("Order", orderSchema);

export { Order };
