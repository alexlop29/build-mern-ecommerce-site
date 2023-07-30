import React from 'react';
import ResponsiveAppBar from '../../modules/navigation-bar/organisms/navigation-bar';
import ProductGrid from '../../modules/products/molecules/grid';
import styled from '@emotion/styled';

const Wrapper = styled.section`
  background: #fcfbe7;
`;

export const Welcome = () => {
  return (
    <Wrapper>
      <ResponsiveAppBar />
      <h1>Welcome to ProShop!</h1>
      <ProductGrid />
    </Wrapper>
  );
};

