import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';

export default function ProductCard(props: any) {
  const { name, image, description, rating } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component='img' height='140' image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          {/* <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography> */}
          <Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
