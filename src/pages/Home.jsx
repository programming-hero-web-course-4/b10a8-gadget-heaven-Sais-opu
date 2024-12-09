import { Link, Outlet, useLoaderData } from 'react-router-dom';
import BannerImg from '../assets/banner.jpg';

import Categories from '../components/Categories';
const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <div className="relative bg-red-700 w-11/12 mx-auto text-center">
                <p className='text-6xl'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to='/shop now'><button>shop now</button></Link>
                {/* <div className="absolute w-80 h-80 object-cover">
                    <img src={BannerImg} alt="" />
                </div> */}
            </div>
            {/* category */}
            <p className='text-center'>Explore Cutting-Edge Gadgets</p>
            <div className='flex'>
                <div>
                    {/* button */}
                    <Categories categories={categories}></Categories>
                </div>
                <div className='grid grid-cols-3'>
                    {/* card */}
                    <Outlet></Outlet>
                </div>
                
            </div>
        </div>
    );
};

export default Home;
