import React, { useEffect, useRef,  useState,  } from 'react';
import { getStoredProductList } from '../components/Utility';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const modalRef = useRef(null);

    useEffect(() => {
        const storedProductList = getStoredProductList();
        if (storedProductList && Array.isArray(storedProductList)) {
            const uniqueProducts = storedProductList.reduce((acc, current) => {
                if (!acc.some(item => item.product_id === current.product_id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            setCartItems(uniqueProducts);
        }
    }, []);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotalCost(total);
    }, [cartItems]);

    const handlePurchase = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const handleCloseModal = () => {
        setCartItems([]);
        setTotalCost(0);
        localStorage.setItem('add-list', JSON.stringify([])); // Clear items from localStorage
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.product_id !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem('add-list', JSON.stringify(updatedCartItems));
    };

    const sortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setCartItems(sortedItems);
    };

    return (
        <div>
            <div className='flex justify-between mt-20 mx-5'>
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className='flex gap-2 mb-5'>
                    <h3 className="font-bold mt-3">Total cost: {totalCost}$</h3>
                    <button onClick={sortByPrice} className='btn rounded-2xl'>Sort by Price</button>
                    <button onClick={handlePurchase} className='btn rounded-2xl'>Purchase</button>
                </div>
            </div>

            {cartItems.length > 0 ? (
                cartItems.map((product) => (
                    <div key={product.product_id} className='border flex justify-between shadow-lg rounded-xl mx-10 my-4'>
                        <div className='flex'>
                            <div className='w-[200px] p-3'>
                                <img className='rounded-xl w-full' src={product.product_image} alt={product.product_title} />
                            </div>
                            <div className='mt-5'>
                                <p className='font-bold'>{product.product_title}</p>
                                <p className='py-2'><span className='font-bold py-2'>Description: </span>{product.description}</p>
                                <p>{product.price}$</p>
                            </div>
                        </div>
                        <button className='mt-4 mr-5' onClick={() => removeFromCart(product.product_id)}>
                            <img className='text-red-700' width="25" height="25" src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
                        </button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}

            {/* Modal */}
            <dialog ref={modalRef} className="text-center modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <svg className='ml-44' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                        <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
                    </svg>
                    <h1 className="text-4xl font-bold">Payment successful</h1>
                    <hr className='mx-14 mt-5 mb-5' />
                    <h3 className="text-lg">Thank you for purchasing</h3>
                    <p className="py-4">Total cost: {totalCost}$</p>
                    <div className="modal-action">
                        <button onClick={handleCloseModal} className="btn">Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;
