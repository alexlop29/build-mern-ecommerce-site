import { userSchema } from "../schemas/user";
import { mongoose } from '../config/mongodb';

const userModel =  mongoose.model("User", userSchema);

export { userModel };
