import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook, saveWishBook } from "../utility/localstorage";


const BookDetails = () => {

    const books = useLoaderData();
    const { BookId } = useParams();
    const intBookId = parseInt(BookId);
    const book = books.find(book => book.bookId === intBookId);


    const { bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, image } = book;

    const handleRead = () => {
        saveBook(intBookId)



    }

    const handleWish = () => {
        saveWishBook(intBookId)

    }

    return (
        <div>

            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-[573px] bg-base-200 rounded-3xl">
                    <img className="p-20" src={image} alt="Movie" />
                </figure>
                <div className="">
                    <h2 className="card-title font-playfair text-[40px] font-bold mb-4">{bookName}</h2>
                    <p className="font-work text-[20px] font-medium text-[#131313cc] pb-6">By: {author}</p>
                    <hr />
                    <h2 className="my-4 font-work text-[20px] font-medium text-[#131313cc]">{category}</h2>
                    <hr />
                    <div><p>Review: {review}</p></div>
                    <div className="flex justify-around">Tag: {
                        tags.map(t => <p>#{t}</p>)
                    }</div>
                    <div>
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={handleRead} className="btn btn-primary">Read</button>
                        <button onClick={handleWish} className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div> */}
            <div className="flex mt-12">
                <div className="h-1/2">
                    <figure className="w-[573px] h-[711px] bg-base-200 rounded-3xl flex justify-center items-center">
                        <img className="w-[425px] p-16" src={image} alt="Movie" />
                    </figure>
                </div>
                <div >
                    <div className="pl-12">
                        <h2 className="card-title font-playfair text-[40px] font-bold mb-4">{bookName}</h2>
                        <p className="font-work text-[20px] font-medium text-[#131313cc] pb-6">By: {author}</p>
                        <hr />
                        <h2 className="my-4 font-work text-[20px] font-medium text-[#131313cc]">{category}</h2>
                        <hr />
                        <div className="py-8 font-work text-[16px]"><p><span className="font-bold">Review:</span> {review}</p></div>
                        <div className="flex  items-center gap-4 font-work pb-6"><span className="font-bold">Tag:</span> {
                            tags.map(t => <p key={t} className="text-[#23BE0A] font-work text-[16px] font-medium py-2 px-4 bg-[#23be0a0d] rounded-3xl">#{t}</p>)
                        }</div>
                        <hr />
                        <div className="mt-6 font-work space-y-3">
                            <p><span className="text-[#131313b3] font-work text-[16px] font-normal pr-16">Number of Pages:</span> <span className="text-[16px] font-semibold">{totalPages}</span> </p>
                            <p><span className="text-[#131313b3] font-work text-[16px] font-normal pr-[125px]">Publisher:</span> <span className="text-[16px] font-semibold">{publisher}</span> </p>
                            <p><span className="text-[#131313b3] font-work text-[16px] font-normal pr-[59px]">Year of Publishing:</span> <span className="text-[16px] font-semibold">{yearOfPublishing}</span> </p>
                            <p><span className="text-[#131313b3] font-work text-[16px] font-normal pr-[149px]">Rating:</span> <span className="text-[16px] font-semibold">{rating}</span> </p>
                        </div>
                        <div className="card-actions justify-start mt-10 gap-4">
                            <button onClick={handleRead} className="btn hover:bg-green-300 w-24">Read</button>
                            <button onClick={handleWish} className="btn bg-[#50B1C9] hover:bg-blue-300 w-24">Wishlist</button>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;