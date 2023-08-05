import express from 'express';
import { items } from '../bin/items';
import { productModel } from '../models/product';

const productRoute = express.Router()
productRoute.use(express.json());

productRoute.get('/', (req, res) => {
    res.json(items);
})

productRoute.get('/:id', (req, res) => {
    const product = items.find((item) => item._id === req.params.id);
    res.json(product);
})

// NOTE: (ALopez) Consider using the spread operator to populate new Product().
productRoute.post('/', async (req, res) => {
        try {
          const Product = productModel;
          const createProduct = new Product({
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
          await createProduct.save();
          res.json(createProduct);
        } catch (error) {
            res.json({error: 'encountered error'})
            console.log(`Error: ${error}`);
        }
    }
)

export { productRoute }
