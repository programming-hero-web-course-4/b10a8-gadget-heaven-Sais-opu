import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';

import Categories from '../components/Categories';
const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <div>
                <Banner></Banner>
            </div>
            {/* category */}
            <p className='text-center'>Explore Cutting-Edge Gadgets</p>
            <div className='flex'>
                <div>
                    {/* button */}
                    <Categories categories={categories}></Categories>
                </div>
                <div >
                    {/* card */}
                    <Outlet></Outlet>
                </div>
                
            </div>
        </div>
    );
};

export default Home;
