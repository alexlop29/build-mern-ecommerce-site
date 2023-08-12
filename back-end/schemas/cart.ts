// NOTE: (alopez) Tracks anonymous user carts
// Future: Create a ticket to track carts of authenticated users.
import mongoose from 'mongoose';

const { Schema } = mongoose;

// NOTE: (ALopez) Requires a way of tracking user connection to cart
const cartSchema = new Schema({
  products: [
    {
      product: { type: Array, required: true },
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
