import express from 'express';
import { items } from '../bin/items';
import { connectToMongoDB } from '../config/mongodb';

connectToMongoDB(); // Connection to MongoDB

const productRoute = express.Router()

productRoute.get('/', (req, res) => {
    res.json(items);
})

productRoute.get('/:id', (req, res) => {
    const product = items.find((item) => item._id === req.params.id);
    res.json(product);
})

export { productRoute }
