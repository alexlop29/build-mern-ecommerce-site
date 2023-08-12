// NOTE: (ALopez) Improve error handling by outputing helpful debugging messages to
// Sentry.

import express from 'express';
import { cartModel } from '../models/cart';

const cartRoute = express.Router()
cartRoute.use(express.json());
const Cart = cartModel;

const getCartByVisitorId = async ( visitorId: String ) => {
  let visitorCart = await Cart.findOne({ visitorId: visitorId });
  if (!visitorCart) {
    return {error: "Unable to get a cart by visitorId" }
  }
  return visitorCart;
}

const createCartByVisitorId = async ( visitorId: String ) => {
  let visitorCart = new Cart({
    products: [],
    visitorId: visitorId
  })
  await visitorCart.save();
  if (!visitorCart) {
    return {error: "Unable to create a cart by visitorId" }
  }
  return visitorCart;
};

cartRoute.get('/:visitorId', async (req, res) => {
  try {
    let visitorCart = await getCartByVisitorId(req.params.visitorId);
    if (visitorCart.error) {
      visitorCart = await createCartByVisitorId(req.params.visitorId);
    }
    res.status(200).json(visitorCart);
  }
  catch {
    res.status(500).json({ error: 'Unable to get a cart by visitorId' });
  }
});

// NOTE: (alopez) Add function to validate the provided product id, before
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
