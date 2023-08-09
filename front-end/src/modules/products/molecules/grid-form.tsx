import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProductCard from '../atoms/card';
import Loader from '../atoms/loader';
import ErrorAlert from '../atoms/error';
import { Card } from '@mui/material';

import { useGetProductQuery } from '../../../stores/product-slice';
import { Title } from '../../shared/atoms/styled-title';

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

// export default function ProductGrid() {
//     return (
//         <Grid container spacing={2}>
//           {/* First Row */}
//           <Grid xs={12} sm={6} md={3}>
//             {/* Smaller Item 1 */}
//             <div style={{ backgroundColor: '#f0f0f0', height: '100px' }}>
//               Small Item 1
//             </div>
//           </Grid>

//                     {/* Second Row */}
//                     <Grid xs={12} sm={12} md={6} alignItems="stretch">
//             {/* Middle Item */}
//             <div style={{ backgroundColor: '#9e9e9e', height: '200px' }}>
//               Middle Item
//             </div>
//           </Grid>

//           <Grid xs={12} sm={6} md={3}>
//             {/* Smaller Item 2 */}
//             <div style={{ backgroundColor: '#f0f0f0', height: '100px' }}>
//               Small Item 2
//             </div>
//           </Grid>
    
//           {/* Third Row */}
//           <Grid xs={12} sm={6} md={3}>
//             {/* Smaller Item 3 */}
//             <div style={{ backgroundColor: '#f0f0f0', height: '100px' }}>
//               Small Item 3
//             </div>
//           </Grid>
//           <Grid xs={12} sm={6} md={3}>
//             {/* Smaller Item 4 */}
//             <div style={{ backgroundColor: '#f0f0f0', height: '100px' }}>
//               Small Item 4
//             </div>
//           </Grid>
//         </Grid>
//       );
// }

export default function ProductGrid() {
    const { data: product, isLoading, isError } = useGetProductQuery('getProduct');

  return (
    <Grid container justifyContent={"center"} rowSpacing={1} columnSpacing={1}>
      {/* First Row -- Given 12 as a column width */}
      <Grid xs={12} md={3} justifyContent={"center"}>
        <Item>
          <ProductCard
            name={product?.at(0).name}
            description={product?.at(0).description}
            image={product?.at(0).image}
            rating={product?.at(0).rating}
            id={product?.at(0)._id}
          />
        </Item>
      </Grid>
      <Grid xs={12} md={6} >
        <Item>
        <Card>
          <Title> Go </Title>
        </Card>
        </Item>
      </Grid>
      <Grid xs={12} md={3} >
        <Item>
          <ProductCard
            name={product?.at(1).name}
            description={product?.at(1).description}
            image={product?.at(1).image}
            rating={product?.at(1).rating}
            id={product?.at(1)._id}
          />
        </Item>
      </Grid>

      {/* Second -- Given 12 as a column width */}
      <Grid xs={12} md={3} >
        <Item>
          <ProductCard
            name={product?.at(2).name}
            description={product?.at(2).description}
            image={product?.at(2).image}
            rating={product?.at(2).rating}
            id={product?.at(2)._id}
          />
        </Item>
      </Grid>
      <Grid xs={12} md={6} >
        <Item>
          <Card>
            <Title> Sugarfree </Title>
          </Card>
        </Item>
      </Grid>
      <Grid xs={12} md={3} >
        <Item>
          <ProductCard
            name={product?.at(3).name}
            description={product?.at(3).description}
            image={product?.at(3).image}
            rating={product?.at(3).rating}
            id={product?.at(3)._id}
          />
          </Item>
      </Grid>
    </Grid>
  )
}
