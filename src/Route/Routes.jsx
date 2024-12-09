import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Static from '../pages/Static';
import Card from '../components/Card';
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./Category.json'),
                children: [
                    {
                        path: '/category/:category',
                        element:<Card></Card>
                    },
                ]
            },
            {
                path: '/Dashboard',
                element:<Dashboard></Dashboard>,
            },
            {
                path: '/Details',
                element:<Details></Details>,
            },
            {
                path: '/Static',
                element:<Static></Static>,
            },
        ]
    }
])
export default routes