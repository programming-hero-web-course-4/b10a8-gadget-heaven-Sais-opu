import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useState } from "react";

const Details = () => {
    const { product_id } = useParams(); 
    const data = useLoaderData();
    const [isWishlistAdded, setIsWishlistAdded] = useState(false); // state to track wishlist status
    const [isCartAdded, setIsCartAdded] = useState(false); // state to track cart status

    // Debugging log for Product ID from URL
    console.log("Product ID from Params:", product_id); 

    // Directly compare strings (since product_id is a string in your data)
    const product = data ? data.find(item => item.product_id === product_id) : null;

    console.log("Matched Product:", product); // Debugging

    if (!product) {
        return <div>Product not found</div>;
    }

    const { product_title, product_image, price } = product || {};
    console.log("Price:", price); // Debugging

    // Function to handle adding the product to wishlist
    const addToWishlist = (product) => {
        if (isWishlistAdded) {
            toast.error('Product is already in the wishlist!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            addToStoredProductWishList(product); // Function to store the product in wishlist (localStorage or global state)
            setIsWishlistAdded(true); // Set wishlist as added
            toast.success('Added to wishlist!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    // Function to handle adding the product to cart
    const addToCart = (product) => {
        if (isCartAdded) {
            toast.error('Product is already in the cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            addToStoredProductList(product);
            setIsCartAdded(true);
            toast.success('Added to cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    // Function to handle adding product to the wishlist (e.g., in localStorage)
    const addToStoredProductWishList = (product) => {
        const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        existingWishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
    };

    // Function to handle adding product to the cart (e.g., in localStorage)
    const addToStoredProductList = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("addtocart")) || [];
        existingCart.push(product);
        localStorage.setItem("addtocart", JSON.stringify(existingCart));
    };

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="card card-side bg-base-100 shadow-xl border -mt-28 mx-44">
                <figure className='p-5'>
                    <img className="w-[600px] rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="card-body text-left mt-16">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}$</p>
                    <button className="btn btn-xs bg-green-200 text-green-500 mr-72 rounded-full text-left">In stock</button>
                    <p>{description}</p>
                    <p className="font-bold">Specifications:</p>
                    {specification && specification.length > 0 && (
                        <ul className="list-decimal pl-5">
                            {specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    )}
                    <p className='font-bold'>Ratings:</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 border bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 border bg-yellow-400"
                        />
                        <input type="radio" name="rating-2" className="mask mask-star-2 border bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 border bg-yellow-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 border bg-yellow-400" />
                        <p className='rounded-full bg-gray-300 size-7 pl-4 mr-44'>{rating}</p>
                    </div>

                    <div className="card-actions justify-start mt-4 gap-5">
                        <button className='btn rounded-full bg-[#9538E2]' onClick={() => addToCart(product)}>Add To Cart</button>
                        <button
                            className='btn rounded-full border'
                            onClick={() => addToWishlist(product)}
                            disabled={isWishlistAdded} // Disable the button after clicking
                        >
                            {isWishlistAdded ? (
                                <img
                                    width="24"
                                    height="24"
                                    backgroundColor='blur'
                                    src="https://img.icons8.com/ios/50/like--v1.png"
                                    alt="like icon"
                                />
                            ) : (
                                <img
                                    width="24"
                                    height="24"
                                    src="https://img.icons8.com/ios/50/like--v1.png"
                                    alt="like icon"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
