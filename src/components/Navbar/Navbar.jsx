import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <li className="p-4 ">
            <NavLink to='/' className={({ isActive }) =>
             isActive ? 'border-2 rounded-lg border-[#23BE0A] text-[#23BE0A] py-3 px-5 font-semibold' : ''}>Home</NavLink>
        </li>
        <li className="p-4"><NavLink to='/listed'
            className={({ isActive }) =>
            isActive ? 'border-2 rounded-lg border-[#23BE0A] text-[#23BE0A] py-3 px-5 font-semibold' : ''} >Listed Books</NavLink></li>
        <li className="p-4"><NavLink to='/pages' className={({ isActive }) =>
             isActive ? 'border-2 rounded-lg border-[#23BE0A] text-[#23BE0A] py-3 px-5 font-semibold' : ''}>Pages to Read</NavLink></li>
    </>


    return (

        <div>
            <div className="navbar mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-work font-bold text-[28px]">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 font-work text-[18px] font-normal">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn bg-[#23BE0A] hover:bg-green-400 font-work text-white font-semibold">Sign In</a>
                    <a className="btn bg-[#59C6D2] hover:bg-sky-200   font-work text-white font-semibold ">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;