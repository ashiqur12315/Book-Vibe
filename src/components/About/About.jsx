

const About = () => {
    return (
        <div className="bg-gray-100 p-4">
            
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Book Categories</h1>
                <ul>
                    <li className="mb-2">
                        <span className="font-bold bg-red-400 p-1 rounded-lg">Fiction:</span>
                        <ul className="ml-4">
                            <li>Literary Fiction</li>
                            <li>Science Fiction</li>
                            <li>Fantasy</li>
                            <li>Mystery</li>
                            <li>Thriller</li>
                            <li>Romance</li>
                            <li>Historical Fiction</li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <span className="font-bold bg-green-500 p-1 rounded-lg">Non-fiction:</span>
                        <ul className="ml-4">
                            <li>Biography/Autobiography</li>
                            <li>Memoir</li>
                            <li>Self-Help</li>
                            <li>Business/Finance</li>
                            <li>History</li>
                            <li>Science</li>
                            <li>Psychology</li>
                            <li>Philosophy</li>
                            <li>Travel</li>
                            <li>Cookbooks</li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default About;