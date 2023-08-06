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
    getProductById: builder.query({
        query: (productId: any) => ({
            url: `${PRODUCT_URL}/${productId}`
        }),
        keepUnusedDataFor: 5,
    })
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery } = productApiSlice;
