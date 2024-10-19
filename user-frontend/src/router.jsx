// src/router.jsx
import {createBrowserRouter} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import Users from './views/Users.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Dashboard from './views/Dashboard.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>, 
        children: [
            {
                path: '/',
                element: <Navigate to ="/users"/>

            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    }
])

export default router;