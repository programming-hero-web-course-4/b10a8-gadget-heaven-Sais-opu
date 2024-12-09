// import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import { Bounce,toast, ToastContainer,} from 'react-toastify';
// import { useState } from "react";

import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BannerD from '../components/BannerD';
import Nav from '../components/Nav';



const Details = () => {
    
    const { product_id } = useParams();
    const data = useLoaderData();
    const [isWishlistAdded, setIsWishlistAdded] = useState(false);
    const [isCartAdded, setIsCartAdded] = useState(false);

    const product = data ? data.find(item => item.product_id === product_id) : null;

    if (!product) {
        return <div>Product not found</div>;
    }

    const { product_title, product_image, price, description, specification, rating } = product || {};

    const addToWishlist = (product) => {
        const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (existingWishlist.some(item => item.product_id === product.product_id)) {
            toast.error('Product is already in the wishlist!');
        } else {
            existingWishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
            setIsWishlistAdded(true);
            toast.success('Added to wishlist!');
        }
    };

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("addtocart")) || [];
        if (existingCart.some(item => item.product_id === product.product_id)) {
            toast.error('Product is already in the cart!');
        } else {
            existingCart.push(product);
            localStorage.setItem("addtocart", JSON.stringify(existingCart));
            setIsCartAdded(true);
            toast.success('Added to cart!');
        }
    };

    return (
        
        <div>
            <Nav></Nav>
            <BannerD></BannerD>
            <ToastContainer />
            <div className="card card-side bg-base-100 -mt-40 shadow-xl border mx-16">
                <figure className="p-5">
                    <img className="w-[600px] rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}$</p>
                    <p>{description}</p>
                    <p className="font-bold">Specifications:</p>
                    <ul className="list-decimal pl-5">
                        {specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <p className="font-bold">Ratings: {rating}</p>
                    <div className="card-actions justify-start mt-4 gap-5">
                        <button className="btn rounded-full bg-[#9538E2]" onClick={() => addToCart(product)}>
                            Add To Cart
                        </button>
                        <button className="btn rounded-full border" onClick={() => addToWishlist(product)}>
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
// // <div>
// <BannerD className='mx-16 -mt-36 pb-72'
// ></BannerD>
// <BannerDin></BannerDin>
// </div>
export default Details;
