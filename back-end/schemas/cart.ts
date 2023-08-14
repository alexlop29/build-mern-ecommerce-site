// NOTE: (alopez) Tracks anonymous user carts
// Future: Create a ticket to track carts of authenticated users.
import mongoose from 'mongoose';

const { Schema } = mongoose;

// NOTE: (ALopez) Requires a way of tracking user connection to cart
// NOTE: (ALopez) Add functionality to limit number of items in cart; Target restricts carts to 50 items.
const cartSchema = new Schema({
  products: [
    {
      product: { type: String, required: true },
      quantity: { type: Number, required: true }
    },
  ],
  visitorId: {
    type: Number,
    required: true,
  }
},{
    collection: 'cart',
    timestamps: true,
    expireAfterSeconds: 7200 // Equates to two hours in seconds
})

export { cartSchema }
