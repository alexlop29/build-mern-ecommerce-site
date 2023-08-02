import mongoose from 'mongoose';
import { productSchema } from "../schemas/product";

const { Model } = mongoose;

const Product = new Model("Product", productSchema);

export { Product };
