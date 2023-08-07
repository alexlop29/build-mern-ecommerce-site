import ResponsiveAppBar from '../../modules/navigation-bar/organisms/navigation-bar';
import ProductGrid from '../../modules/products/molecules/grid';
import styled from '@emotion/styled';
import { Title } from '../../modules/shared/atoms/styled-title';

const Wrapper = styled.section`
  background: #fcfbe7;
`;

export const Welcome = () => {
  return (
    <Wrapper>
      <ResponsiveAppBar />
      <div style={{margin: 100}} />
      <Title>Go Sugarless</Title>
      <ProductGrid />
    </Wrapper>
  );
};

