import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import route from '@/routers';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}><RouterProvider router={route} /></Provider>
  </React.StrictMode>
);
