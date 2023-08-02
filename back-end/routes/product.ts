import express from 'express';
import { items } from '../bin/items';
import { connectToMongoDB } from '../config/mongodb';
import { Product } from '../models/product';

const conn = connectToMongoDB();
const productRoute = express.Router()

productRoute.get('/', (req, res) => {
    res.json(items);
})

productRoute.get('/:id', (req, res) => {
    const product = items.find((item) => item._id === req.params.id);
    res.json(product);
})

const productSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  }, {
      timestamps: true,
  })

productRoute.post('/', (req, res) => {
    const product = new Product({
        user: req.body.user,
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        reviews: req.body.reviews,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        price: req.body.price,
        countInStock: req.body.countInStock,
    });

    // const product = items.find((item) => item._id === req.params.id);
    res.json(product);
})

export { productRoute }
