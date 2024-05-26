// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Products from './Screens/Products';
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
    path: '/Protected',
    element: <ProtectedRoutes />,
    children: [
      // Añadir rutas protegidas aquí
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
