import * as React from 'react';
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

export default function ProductGrid() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} columns={16}>
        {items.map(item => (
          <Grid xs={4}>
            <Item>
              <ProductCard name={item.name} description={item.description} image={item.image} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
