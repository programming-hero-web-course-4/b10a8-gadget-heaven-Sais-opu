import React, { useEffect, useState } from 'react';

import Nav from '../components/Nav';

import Banner from '../components/Banner';

import Footer from '../components/Footer';
import Cart from '../components/cart';
import Wish from '../components/wish';


import Details from './Details';

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isActive, setIsActive] = useState({ available: true, status: "active" });


    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };


    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => [...prevItems, product]);
    };

    return (
        <div>
            <Nav/>
            <Banner
                className='-mt-28 px-64 pb-20'
                title="Product Details"
                description="Explore the latest gadgets that will take your experience to the next level."
                backgroundColor="bg-[#9538E2]"
            />
            <div className='flex justify-center -mt-20 gap-5'>
                <div
                    className={`${isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2]'}`}
                    onClick={() => setIsActive({ available: true, status: "active" })}
                >
                    Cart
                </div>
                <div
                    className={`${!isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2]'}`}
                    onClick={() => setIsActive({ available: false, status: "selected" })}
                >
                    Wishlist
                </div>
            </div>

            <div>
                {isActive.available ? (
                    <Cart cartItems={cartItems} />
                ) : (
                    <Wish wishlistItems={wishlistItems} />
                )}
            </div>
            <Details addToCart={addToCart} addToWishlist={addToWishlist} />
            <Footer />
        </div>
    );
};

export default Dashboard;
