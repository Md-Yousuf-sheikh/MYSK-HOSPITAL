import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="bg-blue-50 py-5 mb-3">
                <h1 className="text-center py-3 lg:text-5xl text-4xl text-blue-500 font-bold ">About Us</h1>
                <div className="text-center py-5 text-blue-400">
                    <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium text-blue-400">About</span>
                </div>
            </div>
            <div class="relative pt-16 bg-blueGray-50">
                <div class="container mx-auto">
                    <div class="flex flex-wrap items-center">
                        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-500">
                                <img alt="..." src="https://i.ibb.co/92fShSR/about.jpg" />
                                <blockquote class="relative p-8 mb-4">
                                    <h4 class="text-xl font-bold text-white">
                                        You will always get good services hear!
                                    </h4>
                                    <p class="text-md font-light mt-2 text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae id voluptatum ipsam magnam error animi impedit corrupti dolor deleniti.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div class="w-full md:w-6/12 px-4">
                            <div class="flex flex-wrap">
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative flex flex-col mt-4">
                                        <div class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i class="fas fa-user-md"></i>
                                            </div>
                                            <h6 class="text-xl mb-1 font-semibold">Our Doctors</h6>
                                            <p class="mb-4 text-blueGray-500">
                                                Our doctor are very export and will give you a lot of good quality support!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="relative flex flex-col min-w-0">
                                        <div class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i class="fas fa-stethoscope"></i>
                                            </div>
                                            <h6 class="text-xl mb-1 ">
                                                Our Services
                                            </h6>
                                            <p class="mb-4 text-blueGray-500">
                                                You will get all kind of support ans service here 24 hours support is given!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-6/12 px-4">
                                    <div class="relative flex flex-col min-w-0 mt-4">
                                        <div class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i class="fas fa-newspaper"></i>
                                            </div>
                                            <h6 class="text-xl mb-1 ">Blog</h6>
                                            <p class="mb-4 text-blueGray-500">
                                                Our blog help you ! your physical and mental Disease will help reduce !
                                            </p>
                                        </div>
                                    </div>
                                    <div class="relative flex flex-col min-w-0">
                                        <div class="px-4 py-5 flex-auto">
                                            <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i class="fas fa-file-alt"></i>
                                            </div>
                                            <h6 class="text-xl mb-1 ">Documentation</h6>
                                            <p class="mb-4 text-blueGray-500">
                                                Red our documentation you will never know our work and services our doctor and narsesh!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;