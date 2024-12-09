const getStoredProductWishList = () => {
    const storedListWishListStr = localStorage.getItem('wish-list');
    if (storedListWishListStr) {
        const storedWishList = JSON.parse(storedListWishListStr);
        return storedWishList;
    } else {
        return [];
    }
};

const addToStoredProductWishList = (id) => {
    const storedWishList = getStoredProductWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'already in wishlist');
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
};

export { addToStoredProductWishList, getStoredProductWishList };
