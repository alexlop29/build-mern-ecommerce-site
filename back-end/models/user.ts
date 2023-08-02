import mongoose from 'mongoose';
import { userSchema } from "../schemas/user";

const { Model } = mongoose;

const product = new Model("User", userSchema);
