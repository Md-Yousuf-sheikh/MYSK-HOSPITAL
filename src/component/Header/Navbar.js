import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Navbar = ({ toggle }) => {
    const { user, logOut } = useAuth();
    return (
        <nav className="flex px-4 mx-auto  justify-between items-center py-3 bg-white text-black relative  " role='navigation' >
            <Link to="/" className=" font-bold text-red-400 text-1xl md:text-2xl  ">
                MYSK
            </Link>
            {/* Toggle icon svg */}
            <div className="px-4 cursor-pointer  md:hidden">
                <svg onClick={toggle} className="w-6  h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/">
                    Home
                </Link>
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/about">
                    About
                </Link>
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/service">
                    Service
                </Link>
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/doctors">
                    Doctors
                </Link>
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/Appointments">
                    Appointments
                </Link>
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/blog">
                    Blog
                </Link>
                <Link className="lg:p-4 px-2 hover:text-blue-500" to="/contact">
                    Contact
                </Link>
                <span className="mx-2">
                    {
                        user?.photoURL && <img className=" mr-5 md:hidden lg:inline-block inline-block ml-2 w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                    }
                    {
                        user?.email ? <Link to="/" onClick={logOut} className=" inline-block"><h2 className="bg-blue-400 px-2 py-1  rounded-md shadow-lg text-white hover:shadow">LogOut</h2></Link>
                            : <Link to="/login" className="mx-2 z-2 px-2 py-1 text-white rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 ">LogIn</Link>
                    }
                </span>
            </div>
        </nav>
    );
};

export default Navbar;