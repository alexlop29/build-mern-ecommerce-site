import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProductCard from '../atoms/card';
import Loader from '../atoms/loader';
import ErrorAlert from '../atoms/error';

import { useGetProductQuery } from '../../../stores/product-slice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type productSchema = {
  _id: number,
  image: string,
  name: string,
  description: string,
  brand: string,
  category: string,
  price: number,
  countInStock: number,
  rating: number,
  numReviews: number
};

export default function ProductGrid() {
  const { data: product, isLoading, isError } = useGetProductQuery('getProduct');

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorAlert message={'An error occured.'} />
      ) : (
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2} columns={16}>
            {product.map((item: productSchema) => (
                <Grid xs={12} sm={8} md={4}>
                  <Item>
                    <ProductCard 
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      rating={item.rating}
                      id={item._id} />
                  </Item>
                </Grid>
            ))}
          </Grid>
        </Box>
      )};
    </>
  )
};
