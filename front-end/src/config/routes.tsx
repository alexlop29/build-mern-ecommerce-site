import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { Welcome } from '../pages/welcome/welcome';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Welcome />}
      // loader={rootLoader}
      // action={rootAction}
      // errorElement={<ErrorPage />}
    ></Route>,
  ),
);
