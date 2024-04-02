import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import route from '@/routers';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
