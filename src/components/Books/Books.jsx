import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);



    return (
        <div>
            <h2 className="font-bold text-4xl font-playfair text-center mb-8">Books</h2>
            <div className="grid grid-cols-3 gap-4">
                
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;