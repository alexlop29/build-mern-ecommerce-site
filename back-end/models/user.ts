import mongoose from 'mongoose';
import { userSchema } from "../schemas/user";

const { Model } = mongoose;

const User = new Model("User", userSchema);

export { User };
