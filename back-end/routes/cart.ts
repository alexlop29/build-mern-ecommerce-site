import express from 'express';
import { cartModel } from '../models/cart';

const cartRoute = express.Router()
cartRoute.use(express.json());
const Cart = cartModel;

cartRoute.get('/:visitorId', async (req, res) => {
    try {
      const locatedCart = await Cart.findOne({ visitorId: req.params.visitorId });
      if (!locatedCart) {
        return res.status(404).json({ error: 'Cart does not exist' });
      }
      res.status(200).json(locatedCart);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// NOTE: (alopez) Add secondary API call to validate the provided product id, before
// saving content to the database.
cartRoute.post('/', async (req, res) => {
        try {
          const createCart = new Cart({
            product: req.body.product,
            quantity: req.body.quantity,
            visitorId: req.body.visitorId,
          });
          await createCart.save();
          res.json(createCart);
        } catch (error) {
            res.json({error: 'encountered error'})
        }
    }
)

export { cartRoute }
