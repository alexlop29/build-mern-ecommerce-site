import { orderSchema } from "../schemas/order";
import { mongoose } from '../config/mongodb';

const orderModel =  mongoose.model("Order", orderSchema);

export { orderModel };
