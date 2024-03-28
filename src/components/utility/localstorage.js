import { toast } from "react-toastify";


const getStoredBook = () => {
    let readBooks = [];
    const storedBook = localStorage.getItem('Book-application');
    if (storedBook) {
        // return JSON.parse(storedBook);
        readBooks = JSON.parse(storedBook);
    }
    // return [];
    return readBooks;
}
const getStoredWishBook = () => {
    let wishBooks = [];
    const storedWishBook = localStorage.getItem('Wish-application');
    if (storedWishBook) {
        // return JSON.parse(storedBook);
        wishBooks = JSON.parse(storedWishBook);
    }
    // return [];
    return wishBooks;
}
const saveWishBook = id => {
    let readBooks = getStoredBook();
    const exists = readBooks.find(bid => bid === id);
    if (exists) {
        return toast.error('Already Added to Read List')
    }
    let wishBooks = getStoredWishBook();
    const isExists = wishBooks.find(bid => bid === id);
    if (isExists) {
        return toast.error('Already Added to Wish List')
    }
    else {
        wishBooks.push(id);
        localStorage.setItem('Wish-application', JSON.stringify(wishBooks));
        toast('Book added to Read list')
    }
}


const saveBook = id => {
    let readBooks = getStoredBook();
    // const storedBooks = getStoredBook();
    // const exists = storedBooks.find(bid => bid === id);
    const exists = readBooks.find(bid => bid === id);
    // if(!exists){
    //     storedBooks.push(id);
    //     localStorage.setItem('Book-application', JSON.stringify(storedBooks));
    //     return true;
    // }
    if (exists) {
        return toast.error('Already Added to Read List')
    }
    // return false;
    else {
        readBooks.push(id);
        localStorage.setItem('Book-application', JSON.stringify(readBooks));
        toast('Book added to Read list')
    }

}

export { getStoredBook, saveBook, getStoredWishBook, saveWishBook }