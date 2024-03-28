import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <div>
            <Link to={`/Book/${bookId}`}>
                <button className="p-6 border-2 w-96 rounded-2xl">
                    <div className="card bg-base-100">
                        <figure className=" py-10 max-w-96 bg-base-200 rounded-2xl ">
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="mt-5">
                            <div className="flex gap-3">
                                {
                                    tags.map(t => <p className="text-[#23BE0A] font-work text-[16px] font-medium py-2 px-4 bg-[#23be0a0d] rounded-3xl" key={t}>{t}</p>)
                                }
                            </div>
                            <h2 className="card-title font-playfair font-bold text-2xl my-4">{bookName}</h2>

                            <div className="">
                                <p className="font-work text-[16px] font-medium mb-5">By: {author}</p>

                            </div>
                            <div className="flex justify-between font-work text-[16px] font-medium">
                                <p className="">{category}</p>
                                <p className="flex items-center gap-3">{rating} <AiOutlineStar /></p>
                            </div>


                        </div>
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default Book;