import mongoose from 'mongoose';

const { Schema } = mongoose;

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
    expireAfterSeconds: 7200
})

export { cartSchema }
