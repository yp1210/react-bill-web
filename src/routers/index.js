import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Layout',
    element: <Layout />
  },
])

export default routes;