import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from '../pages/welcome/welcome';
import { Product } from '../pages/products/product';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);
