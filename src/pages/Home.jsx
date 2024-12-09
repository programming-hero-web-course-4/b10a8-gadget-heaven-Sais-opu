import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';

import Categories from '../components/Categories';
import BannerU from '../components/BannerU';
const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <div>
                <BannerU className='mx-14 -mt-36 pb-72'
                ></BannerU>
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
