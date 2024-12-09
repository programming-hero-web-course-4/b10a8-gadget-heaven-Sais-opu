import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Static from '../pages/Static';
import Card from '../components/Card';
import Cart from '../components/cart'; 
import Wish from '../components/wish';
import Error from '../components/Error';
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../Category.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <Card></Card>,
                        loader: () => fetch('../Gadget.json'),
                    },
                ]
            },
            {
                path: '/Dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/Dashboard/cart',
                        element:<Cart></Cart>,
                    },
                    {
                        path: '/Dashboard/Wish',
                        element:<Wish></Wish>,
                    },
                ]
            },
            {
                path: '/Details/:product_id',
                element: <Details></Details>,
                loader: () => fetch('../Gadget.json').then(res => res.json()),
            },
            {
                path: '/Static',
                element:<Static></Static>,
            },
        ]
    }
])
export default routes