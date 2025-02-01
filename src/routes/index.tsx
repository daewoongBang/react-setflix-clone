import MainLayout from 'layouts/MainLayout';
import Home from 'pages/Home';
import Tv from 'pages/Tv';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'tv', element: <Tv /> },
      ],
    },
  ],
  { basename: '/react-setflix' }
);

export default router;
