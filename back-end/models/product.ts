import mongoose from 'mongoose';
import { productSchema } from "../schemas/product";

const { Model } = mongoose;

const product = new Model("Product", productSchema);
