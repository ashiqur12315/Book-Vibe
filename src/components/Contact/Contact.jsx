import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="bg-gray-100 p-4">

            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <div>
                    <p className="mb-2">If you have any questions or inquiries, feel free to contact us:</p>
                    <ul className="list-disc ml-4 mb-4">
                        <li>Email: info@yourlibrary.com</li>
                        <li>Phone: +1234567890</li>
                        <li>Address: 123 Library Street, City, Country</li>
                    </ul>
                    <p className="mb-2">Or you can fill out the form below:</p>
                    
                </div>
            </div>
            <Link to='/404' className="text-2xl btn bg-red-500">Click to see 404 page not found </Link>
        </div>
    );
};

export default Contact;