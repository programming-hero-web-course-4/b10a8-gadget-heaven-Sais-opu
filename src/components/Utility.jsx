// import { useEffect, useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage when the component mounts
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('addtocart')) || [];
        setCartItems(storedCartItems);
    }, []);

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.product_id !== productId);
        setCartItems(updatedCartItems); // Update the state

        // Update localStorage with the new cart
        localStorage.setItem('addtocart', JSON.stringify(updatedCartItems));
    };

    const totalCost = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

    return (
        <div>
            <div className="flex justify-between mt-20 mx-5">
                <h3 className="text-2xl font-bold">Cart</h3>
                <div className="flex gap-2 mb-5">
                    <h3 className="font-bold mt-3">Total cost: {totalCost}$</h3>
                </div>
            </div>

            {cartItems.length > 0 ? (
                cartItems.map((product) => (
                    <div
                        key={product.product_id}
                        className="border flex justify-between shadow-lg rounded-xl mx-10 my-4"
                    >
                        <div className="flex">
                            <div className="w-[200px] p-3">
                                <img
                                    className="rounded-xl w-full"
                                    src={product.product_image}
                                    alt={product.product_title}
                                />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold">{product.product_title}</p>
                                <p className="py-2">
                                    <span className="font-bold py-2">Description: </span>
                                    {product.description}
                                </p>
                                <p>{product.price}$</p>
                            </div>
                        </div>
                        <button
                            className="mt-4 mr-5 text-red-700 font-bold"
                            onClick={() => removeFromCart(product.product_id)}
                        >
                            <img
                                width="25"
                                height="25"
                                src="https://img.icons8.com/ios/50/cancel.png"
                                alt="cancel"
                            />
                        </button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
