import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../../stores/product-slice';

export const Details = ( props: any) => {
  const { id: productId } = useParams();
  const { data: product, isLoading, isError, error } = useGetProductByIdQuery(productId);

  return (
    <div>{productId}</div>
  )
}
