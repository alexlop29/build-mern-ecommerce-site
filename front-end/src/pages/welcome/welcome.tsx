import React from 'react';
import ResponsiveAppBar from '../../modules/layout/organisms/navigation-bar/navigation-bar';
import ProductGrid from '../../modules/products/molecules/grid';

export const Welcome = () => {
  return (
    <>
      <ResponsiveAppBar />
      <h1>Welcome to ProShop!</h1>
      <ProductGrid />
    </>
  );
};

