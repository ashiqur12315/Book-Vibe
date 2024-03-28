import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[554px] bg-base-200 rounded-3xl mt-12 mb-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/3vq9wK9/qqq.png" className="max-w-xs rounded-lg " />
                    <div>
                        <h1 className="text-[56px] font-bold font-playfair">Books to freshen up <br />your bookshelf</h1>
                        
                        <Link to='/listed' className="btn font-work font-bold text-white w-48 bg-[#23BE0A] hover:bg-green-400 mt-12">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;