import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <div className="bg-blue-50 py-5 mb-3">
                <h1 className="text-center py-3 lg:text-5xl text-4xl text-blue-500 font-bold ">Contact Us</h1>
                <div className="text-center py-5 text-blue-400">
                    <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium text-blue-400">Contact</span>
                </div>
            </div>
            <div className=" md:justify-around  py-2 md:flex sm:px-5 container px-4">
                <div className="mt-5 md:px-5">
                    <h1 className="uppercase text-3xl  lg:text-4xl mb-3 text-red-200 font-medium">MYSK hospital</h1>
                    <div className="bg-blue-200 w-10 h-1 mb-5"></div>
                    <h1 className="text-1xl"><i class=" text-blue-400 fas fa-envelope"></i> Email:</h1>
                    <p className="ml-3 mb-3">example1414@gmail.com</p>
                    <h1 className="text-1xl"><i className=" text-blue-400 fas fa-map-marker-alt"></i> Location:</h1>
                    <p className="ml-3 mb-3">142,Gopalgonj,Dhaka,Bangladesh</p>
                    <h1 className="text-1xl"><i class="text-blue-400 fas fa-hospital-alt"></i> Hospital:</h1>
                    <p className="ml-3 mb-3">Dhaka,Bangladesh</p>
                    <h1 className="text-1xl"><i class=" text-blue-400 fas fa-phone-alt"></i> Location:</h1>
                    <p className="ml-3 mb-3">+088 017 254-888</p>
                </div>
                <form class="w-full lg:pl-5 sm:mt-5 max-w-lg">
                    <h1 className="text-3xl font-medium pb-2 text-red-200">Grt In Tach</h1>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-blue-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;