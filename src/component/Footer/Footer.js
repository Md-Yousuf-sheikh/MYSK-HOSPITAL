import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-blueGray-700">MYSK HOSPITAL</h4>
                        <div class="mt-6 lg:mb-0 mb-6">
                            <button class="bg-white text-lightBlue-400 footer-icon" type="button">
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button class="bg-white text-lightBlue-600 footer-icon" type="button">
                                <i class="fab fa-facebook-square"></i>
                            </button>
                            <button class="bg-white text-pink-400 footer-icon" type="button">
                                <i class="fab fa-dribbble"></i>
                            </button>
                            <button class="bg-white text-blueGray-800 footer-icon" type="button">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="/home" class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href >Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href >Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href >About Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul class="list-unstyled">

                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href>Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href >Privacy Policy</a>
                                    </li>
                                    <li>
                                        <Link to="/contact" class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © by <span id="get-current-year">2021</span><Link href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank" /> MYSK
                            <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800"> Hospital</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;