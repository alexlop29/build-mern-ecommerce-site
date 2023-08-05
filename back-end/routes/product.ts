import express from 'express';
import { items } from '../bin/items';
import { productModel } from '../models/product';

const productRoute = express.Router()
productRoute.use(express.json());
const Product = productModel;

productRoute.get('/', async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.json(allProducts);
  }
  catch (error) {
    res.json({error: 'encountered error'})
  }
})

productRoute.get('/:id', async (req, res) => {
  try {
    const searchById = Product.where({ _id: req.params.id })
    const locatedProduct = await searchById.findOne();
    res.json(locatedProduct);
  }
  catch (error) {
    res.json({error: 'encountered error'})
  }
  const product = items.find((item) => item._id === req.params.id);
  res.json(product);
})

// NOTE: (ALopez) Consider using the spread operator to populate new Product().
productRoute.post('/', async (req, res) => {
        try {
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
        }
    }
)

export { productRoute }
