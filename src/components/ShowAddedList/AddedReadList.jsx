import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";




const AddedReadList = () => {
    const books = useLoaderData();

    const [ListedBooks, setListedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
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
    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    bookListed.push(book);
                }
            }
            setListedBooks(bookListed);
            setDisplayBooks(bookListed);
            // console.log(books, storedBookIds, bookListed)
        }

    }, [])

    return (
        <div>

            <details className="dropdown ">
                <summary className="m-1 btn bg-[#23BE0A]">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('All')}><a>All</a></li>
                    <li onClick={() => handleFilter('Fiction')}><a>Fiction</a></li>
                    <li onClick={() => handleFilter('Fantasy')}><a>Fantasy</a></li>
                    <li onClick={() => handleFilter('Thriller')}><a>Thriller</a></li>
                </ul>
            </details>
            <div className="space-y-6">
            {
                displayBooks.map(book =>
                    
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

export default AddedReadList;