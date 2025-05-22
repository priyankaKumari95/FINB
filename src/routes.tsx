import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Budgets from './pages/Budgets';
import Goals from './pages/Goals';
import Insights from './pages/Insights';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import Layout from './components/layout/Layout';
import NoPage from './pages/NoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/budgets',
        element: <Budgets />,
      },
    ],
  },
  {
    path: '*',
    element: <NoPage />,
  },
]);