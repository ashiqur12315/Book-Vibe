import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredBook, getStoredWishBook } from "../utility/localstorage";



const ListedBooks = () => {
    
    // const [ListedBooks, setListedBooks] = useState([]);    
    // const [displayBooks, setDisplayBooks] = useState([]);

    // const [wishListedBooks, setWishListedBooks] = useState([]);
    // const [wishDisplayBooks, setWishDisplayBooks] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    const handleFilter = filter => {
        if (filter === 'All') {
            setDisplayBooks(ListedBooks);
        }
        else if (filter === 'Fiction') {
            const fictionBooks = ListedBooks.filter(book => book.category === 'Fiction');
            setDisplayBooks(fictionBooks);
        }
        else if (filter === 'Fantasy') {
            const fantasyBooks = ListedBooks.filter(book => book.category === 'Fantasy');
            setDisplayBooks(fantasyBooks);
        }
        else if (filter === 'Thriller') {
            const thrillerBooks = ListedBooks.filter(book => book.category === 'Thriller');
            setDisplayBooks(thrillerBooks);
        }
    }

    
    return (
        <div>
            
            <div className="py-9 bg-[#1313130d] rounded-2xl my-8">
                <p className="font-work text-[28px] font-bold text-center">Books</p>
            </div>

            {/* ---------------------Tabs-----------------------  */}

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to='' onClick={() => setTabIndex(0)} handleFilter={handleFilter}
                 rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===0? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link to={`wishlist`} onClick={() => setTabIndex(1)}
                rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===1? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
                
            </div>

            <Outlet></Outlet>
            


            {/* {
                displayBooks.map(book => <div key={book.bookId} className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{book.bookName}</h1>
                            <p className="py-6">By: {book.author}</p>
                            <div>
                                <div className="flex justify-between">Tag: {
                                    book.tags.map(t => <p>#{t}</p>)
                                }
                                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <p>Publisher: {book.publisher}</p>
                                <p>Page: {book.totalPages}</p>
                            </div>
                            <div className="flex gap-4">
                                <p>Category: {book.category}</p>
                                <p>Rating: {book.rating}</p>
                                <p>View Details</p>
                            </div>

                        </div>
                    </div>
                </div>)
            } */}
        </div>
    );
};

export default ListedBooks;