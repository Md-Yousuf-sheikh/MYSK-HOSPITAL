import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div>
            <div className="bg-blue-50 py-5 ">
                <h1 className="text-center py-3 lg:text-5xl text-4xl text-blue-500 font-bold ">Appointment</h1>
                <div className="text-center py-5 text-blue-400">
                    <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium text-blue-400">Service</span>
                </div>
            </div>
            <div className=" mx-auto w-10/12 md:9/12 lg:5/12 bg-grey-500 ">
                <div className="container mx-auto py-8">
                    <div className="mx-auto bg-blue-50 rounded shadow">
                        <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
                            Appointment
                        </div>

                        <form name="student_application" id="student_application" action="">
                            <div className="py-4 px-8">
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Name</label>
                                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" name="name" placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Email</label>
                                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="email" placeholder="Enter Your email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Phone</label>
                                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Enter Your Phone" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Diseases Name:</label>
                                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Your Diseases" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2">Appointment Date:</label>
                                    <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="datetime-local" />

                                </div>
                                <div className="mb-4">
                                    <button type="submit" className="rounded px-5 text-white shadow-lg hover:shadow py-1 bg-gradient-to-r from-blue-300 to-blue-500 ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appointment;