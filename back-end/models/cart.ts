import { cartSchema } from "../schemas/cart";
import { mongoose } from '../config/mongodb';

const productModel =  mongoose.model("Cart", cartSchema);

export { productModel };
