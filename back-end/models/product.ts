// import { productSchema } from "../schemas/product";
// import { connectToMongoDB } from '../config/mongodb';

// const productModel = async () => {
//     try {
//       const conn = await connectToMongoDB();
//       const Product = conn.model("Product", productSchema);
//       return Product;
//     }
//     catch (error) {
//       console.log(`Error: ${error}`);
//     }
// }

// export { productModel };

import { productSchema } from "../schemas/product";
import { mongoose } from '../config/mongodb';

const productModel =  mongoose.model("Product", productSchema);

export { productModel };

