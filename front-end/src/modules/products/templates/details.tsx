import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useGetProductByIdQuery } from '../../../stores/product-slice';
import Loader from '../atoms/loader';
import ErrorAlert from '../atoms/error';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProductCard from '../atoms/card';
import { productSchema } from '../atoms/annotation';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Details = ( props: any) => {
  const { id: productId } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
  const item: productSchema = product;

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorAlert message={'An error occured.'} />
      ) : (
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2} columns={16}>
                <Grid xs={4}>
                  <Item>
                    <ProductCard 
                      name={item?.name}
                      image={item?.image}
                      description={item?.description}
                      rating={item?.rating}
                      id={item?._id} />
                  </Item>
                </Grid>
          </Grid>
        </Box>
      )};
    </>
  )
};
