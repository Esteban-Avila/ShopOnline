// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Products from './Screens/Products';
import Polithics from './Screens/Polithics';
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
    path:"/", //busca la raiz y luego valida que si es verdadero pasa a dashboard
    element: <ProtectedRoutes/>,
    // propiedad que solicita un arreglo
    children: [
      {
        path: '/Payments',
        element: <Payments />,
      },
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
