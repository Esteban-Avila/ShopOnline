// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Payments from './Screens/Payments';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { AuthProvider } from './Auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/Products',
    element: <Products />,
  },
  {
    path: '/Polithics',
    element: <Polithics />,
  },
  {
    path: '/Protected',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/Payments',
        element: <Payments />,
      }
      
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
