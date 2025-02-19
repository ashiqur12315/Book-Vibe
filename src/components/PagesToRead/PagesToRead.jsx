import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const PagesToRead = () => {
    const books = useLoaderData();
    const [ListedBooks, setListedBooks] = useState([]);
    console.log(ListedBooks)
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

        }

    }, []);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const data = ListedBooks;
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


    return (
        <div className="px-7 py-20 rounded-3xl bg-[#13131308]">
            
            <BarChart
                width={1170}
                height={580}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;