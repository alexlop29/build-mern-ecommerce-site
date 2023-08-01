import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { items } from '../atoms/items';
import ProductCard from '../atoms/card';

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
  const [ products, setProducts ] = useState<productSchema[]>([]);
  console.log('inside product grid')

  useEffect(() => {
    console.log('useEffect is running');
    const getProduct = async () => {
      try{
        const res = await fetch("/product");
        console.log(`logging res: ${res}`)
        const jsonData = await res.json();
        setProducts(jsonData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      } finally {
      }
    };

    getProduct();
  }, []);

  console.log(products);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} columns={16}>
        {products.map(item => (
          <Grid xs={4}>
            <Item>
              <ProductCard name={item.name} description={item.description} image={item.image} rating={item.rating} id={item._id} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
