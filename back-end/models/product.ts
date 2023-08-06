import { productSchema } from "../schemas/product";
import { mongoose } from '../config/mongodb';

const productModel =  mongoose.model("Product", productSchema);

export { productModel };

