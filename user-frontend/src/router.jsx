// src/router.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './views/Login'
import Signup from './views/Signup'
import Users from './views/Users'
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import Dashboard from './views/Dashboard'

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
        path: '/',
        element: <GuestLayout/>,
        children: [
                {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    }
])

export default router;