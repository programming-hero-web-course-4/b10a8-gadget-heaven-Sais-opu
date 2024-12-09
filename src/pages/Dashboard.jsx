// import React, { useEffect, useState } from 'react';

// import Nav from '../components/Nav';

// import Banner from '../components/Banner';

// import Footer from '../components/Footer';
// import Cart from '../components/cart';
// import Wish from '../components/wish';


// import Details from './Details';
// import BannerU from '../components/BannerU';


// const Dashboard = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [isActive, setIsActive] = useState({ available: true, status: "active" });


//     const addToCart = (product) => {
//         setCartItems((prevItems) => [...prevItems, product]);
//     };


//     const addToWishlist = (product) => {
//         setWishlistItems((prevItems) => [...prevItems, product]);
//     };

//     return (
//         <div>
//             <Nav />
//             <BannerU  className='mx-14 -mt-36 pb-[200px]'
//                 ></BannerU>
            
            
//             <div className='flex justify-center -mt-28 gap-5'>
//                 <div
//                     className={`${isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2]'}`}
//                     onClick={() => setIsActive({ available: true, status: "active" })}
//                 >
//                     Cart
//                 </div>
//                 <div
//                     className={`${!isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2]'}`}
//                     onClick={() => setIsActive({ available: false, status: "selected" })}
//                 >
//                     Wishlist
//                 </div>
//             </div>

//             <div >
//                 {isActive.available ? (
//                     <Cart cartItems={cartItems} />
//                 ) : (
//                     <Wish wishlistItems={wishlistItems} />
//                 )}
//             </div>
//             <Details addToCart={addToCart} addToWishlist={addToWishlist} />
//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState } from 'react';
import Nav from '../components/Nav';
import Banner2 from '../components/Banner2';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import Wish from '../components/Wish';

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isActive, setIsActive] = useState({ available: true, status: "active" });

    // Add item to cart
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    // Add item to wishlist
    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => [...prevItems, product]);
    };

    return (
        <div>
            <Nav />
            <Banner2 className='mx-14 -mt-36 pb-[200px]' />
            
            {/* Toggle Buttons */}
            <div className='flex justify-center -mt-28 gap-5'>
                <button
                    className={`btn rounded-full ${isActive.available ? 'bg-[#9538E2] text-white' : 'bg-white text-[#9538E2]'}`}
                    onClick={() => setIsActive({ available: true, status: "active" })}
                >
                    Cart
                </button>
                <button
                    className={`btn rounded-full ${!isActive.available ? 'bg-[#9538E2] text-white' : 'bg-white text-[#9538E2]'}`}
                    onClick={() => setIsActive({ available: false, status: "selected" })}
                >
                    Wishlist
                </button>
            </div>

            {/* Conditional Rendering */}
            <div>
                {isActive.available ? (
                    <Cart cartItems={cartItems} />
                ) : (
                    <Wish wishlistItems={wishlistItems} />
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;

