import React from 'react';
import ResponsiveAppBar from '../../modules/organisms/navigation-bar/navigation-bar'

export const Welcome = () => {
  return (
    <>
      <ResponsiveAppBar />
      <h1>Welcome to ProShop!</h1>
    </>
  )
};

// NOTE TO SELF: Investigate errors while importing using code-splitting
