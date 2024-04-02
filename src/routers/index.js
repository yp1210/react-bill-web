import AuthorizationsCom from '@/components/AuthorizationsCom';
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
    element: <AuthorizationsCom><Layout /></AuthorizationsCom>
  },
])

export default routes;