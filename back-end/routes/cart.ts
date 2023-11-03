import express from 'express';
import { cartModel } from '../models/cart';

const cartRoute = express.Router()
cartRoute.use(express.json());
const Cart = cartModel;

type productInCartSchema = {
  product: String,
  quantity: Number
}

const getCartByVisitorId = async ( visitorId: Number ) => {
  let visitorCart = await Cart.findOne({ visitorId: visitorId });
  if (!visitorCart) {
    return {error: "Unable to get a cart by visitorId" }
  }
  return visitorCart;
}

const createCartByVisitorId = async ( visitorId: Number ) => {
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

const updateCartByVisitorId = async ( visitorId: Number, addItem: productInCartSchema ) => {
  const visitorCart = await Cart.findOneAndUpdate(
    { visitorId: visitorId, 'products.product': addItem.product },
    { $set: { 'products.quantity': addItem.quantity } },
    { upsert: true, new: true }
  );
  return visitorCart;
}

cartRoute.get('/:visitorId', async (req, res) => {
  try {
    let visitorCart = await getCartByVisitorId(Number(req.params.visitorId));
    if (visitorCart.error) {
      visitorCart = await createCartByVisitorId(Number(req.params.visitorId));
    }
    res.status(200).json(visitorCart);
  }
  catch {
    res.status(500).json({ error: 'Unable to get a cart by visitorId' });
  }
});

cartRoute.post('/', async (req, res) => {
  const addItem = {
    product: req.body.product,
    quantity: req.body.quantity,
  }
  const visitorCart= await updateCartByVisitorId(req.body.visitorId, addItem);
  if (!visitorCart) {
    res.status(500).json({ error: 'Unable to update a cart by visitorId' });
  };
  res.status(200).json({ status: 'Successfully updated cart' });
});

export { cartRoute }
