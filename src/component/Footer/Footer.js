import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-gray-200 pt-8 ">
            <div className=" mx-auto ">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-2xl font-bold text-blue-700">MYSK HOSPITAL</h4>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-lightBlue-400 footer-icon" type="button">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="bg-white text-lightBlue-600 footer-icon" type="button">
                                <i className="fab fa-facebook-square"></i>
                            </button>
                            <button className="bg-white text-pink-400 footer-icon" type="button">
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button className="bg-white text-blueGray-800 footer-icon" type="button">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blue-800  text-sm font-bold mb-2">Quick Links</span>
                                <ul>
                                    <li>
                                        <Link to="/home" className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm"  >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/service" className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm"  >Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm"  >Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm"  >About Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blue-800 text-sm font-bold mb-2">Other Resources</span>
                                <ul className="">
                                    <li>
                                        <p className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm" >Terms &amp; Conditions</p>
                                    </li>
                                    <li>
                                        <p className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm"  >Privacy Policy</p>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="text-black hover:text-blue-800 font-semibold block pb-2 text-sm" >Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap bg-gray-800 items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 py-3  mx-auto text-center">
                        <div className="text-sm px-4 text-gray-400 font-semibold ">
                            Copyright © by <span id="get-current-year">2021 </span>
                            <span className=" hover:text-blue-400">MYSK Hospital</span>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;