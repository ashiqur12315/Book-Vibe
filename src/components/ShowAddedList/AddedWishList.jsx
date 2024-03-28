import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBook } from "../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const AddedWishList = () => {
    const books = useLoaderData();

    const [wishListedBooks, setWishListedBooks] = useState([]);
    const [wishDisplayBooks, setWishDisplayBooks] = useState([]);

    const handleFilter = filter => {
        if (filter === 'All') {
            setWishDisplayBooks(wishListedBooks);
        }
        else if (filter === 'Fiction') {
            const fictionBooks = wishListedBooks.filter(book => book.category === 'Fiction');
            setWishDisplayBooks(fictionBooks);
        }
        else if (filter === 'Fantasy') {
            const fantasyBooks = wishListedBooks.filter(book => book.category === 'Fantasy');
            setWishDisplayBooks(fantasyBooks);
        }
        else if (filter === 'Thriller') {
            const thrillerBooks = wishListedBooks.filter(book => book.category === 'Thriller');
            setWishDisplayBooks(thrillerBooks);
        }
    }
    useEffect(() => {
        
        const storedWishBookIds = getStoredWishBook();
        if (books.length > 0) {
            const bookListed = [];
            for (const id of storedWishBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    bookListed.push(book);
                }
            }
            setWishListedBooks(bookListed);
            setWishDisplayBooks(bookListed);
            // console.log(books, storedBookIds, bookListed)
        }
    }, [])


    return (
        <div>
            
            <details className="dropdown">
                <summary className="m-1 btn bg-[#23BE0A]">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('All')}><a>All</a></li>
                    <li onClick={() => handleFilter('Fiction')}><a>Fiction</a></li>
                    <li onClick={() => handleFilter('Fantasy')}><a>Fantasy</a></li>
                    <li onClick={() => handleFilter('Thriller')}><a>Thriller</a></li>
                </ul>
            </details>
            {/* {
                wishDisplayBooks.map(book => <div key={book.bookId} className="hero min-h-screen bg-base-200">
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
            <div className="space-y-6">
            {
                wishDisplayBooks.map(book =>
                    
                    <div key={book.bookId} className="flex border-2 rounded-2xl p-6 gap-6">
                        <div className="w-60 flex justify-center items-center bg-base-200 rounded-2xl">
                            <img className="bg-base-100" src={book.image} />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-2xl font-bold font-playfair">{book.bookName}</h1>
                                <p className="py-4 text-[#131313cc] font-work text-[16px] font-medium">By: {book.author}</p>
                                <div>
                                    <div className="flex  text-[16px]  items-center"><span className="text-[16px]">Tag:</span>
                                     {
                                        book.tags.map(t => <p key={t} className="text-[#23BE0A] font-work text-[16px] font-medium py-2 px-4 bg-[#23be0a0d] rounded-3xl">#{t}</p>)
                                    }
                                     <div className="flex justify-center items-center gap-2">
                                        <CiLocationOn />
                                        <p className="text-[#131313cc] font-normal"> Year of Publishing: {book.yearOfPublishing}</p> 
                                    </div>      
                                </div>
                                    
                                </div>
                                <div className="flex gap-5 text-[#13131399] text-[16px] font-normal my-3">
                                    <p className="flex items-center gap-2"><BsPeople /> Publisher: {book.publisher}</p>
                                    <p className="flex items-center gap-2"><HiOutlineDocumentChartBar /> Page: {book.totalPages}</p>
                                </div>
                                <hr />
                                <div className="flex gap-4  font-work text-[16px] font-normal mt-4">
                                    <p className="py-3 px-5 bg-[#328eff26] rounded-3xl text-[#328EFF]">Category: {book.category}</p>
                                    <p className="py-3 px-5 bg-[#ffac3326] rounded-3xl text-[#FFAC33]">Rating: {book.rating}</p>
                                    <p className="py-3 px-5 bg-green-400 rounded-3xl text-white font-medium">View Details</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }</div>
        </div>
    );
};

export default AddedWishList;