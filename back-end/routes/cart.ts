import express from 'express';
import { cartModel } from '../models/cart';

const cartRoute = express.Router()
cartRoute.use(express.json());
const Cart = cartModel;

const getCartByVisitorId = async ( visitorId: String ) => {
  try {
    let visitorCart = await Cart.findOne({ visitorId: visitorId });
    if (!visitorCart) {
      visitorCart = new Cart({
        products: [],
        visitorId: visitorId,
      })
    await visitorCart.save();
    }
    return visitorCart;
  }
  catch (error) {
    // NOTE: (Alopez) Improve error handling by outputting helpful debugging messages to Sentry.
    return "Unable to retrieve the cart by visitor Id"
  }
}

cartRoute.get('/:visitorId', async (req, res) => {
  let visitorCart = await getCartByVisitorId(req.params.visitorId);
  if (visitorCart == "Unable to retrieve the cart by visitor Id") {
    res.status(500).json({ error: 'Internal server error' });
  }
  res.status(200).json(visitorCart);
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
