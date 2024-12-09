// import React, {  useEffect, useState,  } from 'react';
// import { getStoredProductWishList } from './UtilityW';

// const Wish = () => {
//     const [wishList, setWishList] = useState([]);

//     useEffect(() => {
//         const storedProductWishList = getStoredProductWishList();
//         console.log("Stored wishlist products:", storedProductWishList, typeof storedProductWishList);

//         if (storedProductWishList && Array.isArray(storedProductWishList)) {

//             const uniqueProducts = storedProductWishList.reduce((acc, current) => {
//                 if (!acc.some(item => item.product_id === current.product_id)) {
//                     acc.push(current);
//                 }
//                 return acc;
//             }, []);
//             setWishList(uniqueProducts);
//         }
//     }, []);

//     const sortByPrice = () => {

//         const sortedItems = [...wishList].sort((a, b) => Number(b.price) - Number(a.price));
//         setWishList(sortedItems);
//     };
//     const removeFromWishList = (productId) => {

//         const updatedWishList = wishList.filter(item => item.product_id !== productId);

//         setWishList(updatedWishList);


//         localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
//     };

//     return (
//         <div>
//             <div className='flex justify-between mt-20 mx-5'>
//                 <h3 className='text-2xl font-bold'>Wishlist</h3>
//                 <div className='flex gap-2 mb-5'>
//                     <button onClick={sortByPrice} className='btn rounded-2xl'>
//                         Sort by Price
//                     </button>
//                 </div>
//             </div>
//             {wishList.length > 0 ? (
//                 wishList.map((product) => (
//                     <div key={product.product_id} className='border flex justify-between shadow-lg rounded-xl mx-10 my-4'>
//                         <div className='flex'>
//                             <div className='w-[200px] p-3'>
//                                 <img className='rounded-xl w-full' src={product.product_image} alt={product.product_title} />
//                             </div>
//                             <div className='mt-5'>
//                                 <p className='font-bold'>{product.product_title}</p>
//                                 <p className='py-2'><span className='font-bold'>Description: </span>{product.description}</p>
//                                 <p>{product.price}$</p>
//                             </div>
//                         </div>
//                         <button className='mt-4 mr-5' onClick={() => removeFromWishList(product.product_id)}>
//                             <img className='text-red-700' width="25" height="25" src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>Your wishlist is empty.</p>
//             )}
//         </div>
//     );
// };

// export default Wish;
import React, { useEffect, useState } from 'react';
import { getStoredProductWishList, addToStoredProductWishList } from './UtilityW';
import { ToastContainer } from 'react-toastify';

// const Wish = () => {
//     const [wishList, setWishList] = useState([]);

//     useEffect(() => {
//         const storedProductWishList = getStoredProductWishList();
//         console.log("Stored wishlist products:", storedProductWishList);

//         if (storedProductWishList && Array.isArray(storedProductWishList)) {
//             const uniqueProducts = storedProductWishList.reduce((acc, current) => {
//                 if (!acc.some(item => item.product_id === current.product_id)) {
//                     acc.push(current);
//                 }
//                 return acc;
//             }, []);
//             setWishList(uniqueProducts);
//         }
//     }, []);

//     const sortByPrice = () => {
//         const sortedItems = [...wishList].sort((a, b) => Number(b.price) - Number(a.price));
//         setWishList(sortedItems);
//     };

//     const removeFromWishList = (productId) => {
//         const updatedWishList = wishList.filter(item => item.product_id !== productId);
//         setWishList(updatedWishList);
//         localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
//     };

//     const addProductToWishlist = (product) => {
//         addToStoredProductWishList(product);
//         setWishList([...wishList, product]); // Update state with the new product
//     };

//     return (
//         <div>
//             <div className="flex justify-between mt-20 mx-5">
//                 <h3 className="text-2xl font-bold">Wishlist</h3>
//                 <div className="flex gap-2 mb-5">
//                     <button onClick={sortByPrice} className="btn rounded-2xl">
//                         Sort by Price
//                     </button>
//                 </div>
//             </div>
//             {wishList.length > 0 ? (
//                 wishList.map((product) => (
//                     <div
//                         key={product.product_id}
//                         className="border flex justify-between shadow-lg rounded-xl mx-10 my-4"
//                     >
//                         <div className="flex">
//                             <div className="w-[200px] p-3">
//                                 <img
//                                     className="rounded-xl w-full"
//                                     src={product.product_image}
//                                     alt={product.product_title}
//                                 />
//                             </div>
//                             <div className="mt-5">
//                                 <p className="font-bold">{product.product_title}</p>
//                                 <p className="py-2">
//                                     <span className="font-bold">Description: </span>
//                                     {product.description}
//                                 </p>
//                                 <p>{product.price}$</p>
//                             </div>
//                         </div>
//                         <button
//                             className="mt-4 mr-5 text-red-700"
//                             onClick={() => removeFromWishList(product.product_id)}
//                         >
//                             <img
//                                 width="25"
//                                 height="25"
//                                 src="https://img.icons8.com/ios/50/cancel.png"
//                                 alt="cancel"
//                             />
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p>Your wishlist is empty.</p>
//             )}
//             <div className="mx-5 mt-5">
//                 {/* Example: Adding a product on click */}
//                 <button
//                     onClick={() =>
//                         addProductToWishlist({
//                             product_id: 101,
//                             product_title: "New Product",
//                             product_image: "https://via.placeholder.com/150",
//                             description: "This is a new product.",
//                             price: "50",
//                         })
//                     }
//                     className="btn rounded-2xl bg-blue-500 text-white px-4 py-2"
//                 >
//                     Add to Wishlist
//                 </button>
//             </div>
//         </div>
//     );
// };
const Wish = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishList(storedWishlist);
    }, []);

    const removeFromWishList = (productId) => {
        const updatedWishlist = wishList.filter(item => item.product_id !== productId);
        setWishList(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        toast.success('Removed from wishlist!');
    };

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="flex justify-between mt-20 mx-5">
                <h3 className="text-2xl font-bold">Wishlist</h3>
            </div>
            {wishList.length > 0 ? (
                wishList.map((product) => (
                    <div key={product.product_id} className="border flex justify-between shadow-lg rounded-xl mx-10 my-4">
                        <div className="flex">
                            <div className="w-[200px] p-3">
                                <img className="rounded-xl w-full" src={product.product_image} alt={product.product_title} />
                            </div>
                            <div className="mt-5">
                                <p className="font-bold">{product.product_title}</p>
                                <p>{product.description}</p>
                                <p>{product.price}$</p>
                            </div>
                        </div>
                        <button
                            className="mt-4 mr-5"
                            onClick={() => removeFromWishList(product.product_id)}
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
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};


export default Wish;

