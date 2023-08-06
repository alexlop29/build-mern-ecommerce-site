import { PRODUCT_URL } from "../config/environment";
import { apiSlice } from "./api-slice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductQuery } = productApiSlice;
