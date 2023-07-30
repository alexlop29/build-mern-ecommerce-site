import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from '../pages/welcome/welcome';
import { Details } from '../modules/products/templates/details';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/product/:id",
    element: <Details />,
  },
]);
