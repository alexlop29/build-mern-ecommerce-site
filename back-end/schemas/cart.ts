import mongoose from 'mongoose';

const { Schema } = mongoose;

const cartSchema = new Schema({
  product: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

export { cartSchema }
