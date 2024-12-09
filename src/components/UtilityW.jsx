// const getStoredProductWishList = () => {
//     const storedListWishListStr = localStorage.getItem('wish-list');
//     if (storedListWishListStr) {
//         const storedWishList = JSON.parse(storedListWishListStr);
//         return storedWishList;
//     } else {
//         return [];
//     }
// };

// const addToStoredProductWishList = (id) => {
//     const storedWishList = getStoredProductWishList();
//     if (storedWishList.includes(id)) {
//         console.log(id, 'already in wishlist');
//     } else {
//         storedWishList.push(id);
//         const storedWishListStr = JSON.stringify(storedWishList);
//         localStorage.setItem('wish-list', storedWishListStr);
//     }
// };

// export { addToStoredProductWishList, getStoredProductWishList };

const getStoredProductWishList = () => {
    const storedListWishListStr = localStorage.getItem('wish-list');
    return storedListWishListStr ? JSON.parse(storedListWishListStr) : [];
};

const addToStoredProductWishList = (product) => {
    const storedWishList = getStoredProductWishList();
    // Avoid adding duplicates based on product_id
    if (!storedWishList.some(item => item.product_id === product.product_id)) {
        storedWishList.push(product);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    } else {
        console.log(product.product_title, 'is already in wishlist');
    }
};

export { addToStoredProductWishList, getStoredProductWishList };

