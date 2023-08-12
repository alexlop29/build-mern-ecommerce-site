import { cartSchema } from "../schemas/cart";
import { mongoose } from '../config/mongodb';

const cartModel =  mongoose.model("Cart", cartSchema);

export { cartModel };
