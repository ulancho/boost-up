import React from 'react';
import './styles/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import RegistrationPage from './pages/registration/RegistrationPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: 'registration',
        element: <RegistrationPage />
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
