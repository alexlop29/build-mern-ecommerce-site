import { createSlice } from "@reduxjs/toolkit";

const cartData = localStorage.getItem("cart");
const initialState = cartData ? JSON.parse(cartData) : { cartItems: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {}
});
