import mongoose from 'mongoose';
import { orderSchema } from "../schemas/order";

const { Model } = mongoose;

const product = new Model("Order", orderSchema);
