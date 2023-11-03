import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

export default function ProductCard(props: any) {
  const { name, image, description, rating, id } = props;
  const product_url = `/product/${id}`
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`${product_url}`}>
          <CardMedia component='img' height='140' image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Typography>
              <Rating name="read-only" value={rating} readOnly />
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
