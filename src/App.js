import React from 'react';
import './styles/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import StartTestPage from './pages/start/StartPage';
import TestPage from './pages/test/TestPage';
import ResultPage from './pages/result/ResultPage';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainPage />
        },
        {
            path: '/registration',
            element: <RegistrationPage />
        },
        {
            path: '/start',
            element: <StartTestPage />
        },
        {
            path: '/test',
            element: <TestPage />
        },
        {
            path: '/result',
            element: <ResultPage />
        }
    ],
    { basename: '/boost-up' }
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
