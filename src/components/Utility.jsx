const getStoredProductList = () => {
    const storedListStr = localStorage.getItem('add-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return [];
    }
}

const addToStoredProductList = (d) => {
    const storedList = getStoredProductList();
    if (storedList.includes(d)) {
        console.log(d, 'already')
    }
    else {
        storedList.push(d);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListStr)
    }
}


export { addToStoredProductList, getStoredProductList }