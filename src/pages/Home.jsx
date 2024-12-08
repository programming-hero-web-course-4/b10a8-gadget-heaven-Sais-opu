import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';
const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="relative bg-red-700 w-11/12 mx-auto text-center">
                <p>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to='/shop now'><button>shop now</button></Link>
                <div className="absolute w-80 h-80 object-cover">
                    <img src={banner} alt="" />
                </div>
            </div>
            {/* card */}
        </div>
    );
};

export default Home;
