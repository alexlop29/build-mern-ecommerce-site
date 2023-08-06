import ResponsiveAppBar from '../../modules/navigation-bar/organisms/navigation-bar';
import styled from '@emotion/styled';
import { Details } from '../../modules/products/templates/details';
import { useGetProductByIdQuery } from '../../stores/product-slice';

const Wrapper = styled.section`
  background: #fcfbe7;
`;

export const Product = () => {
  const { data: product, isLoading, isError, error } = useGetProductByIdQuery('getProduct');

  return (
    <Wrapper>
      <ResponsiveAppBar />
      <Details/>
    </Wrapper>
  );
};

