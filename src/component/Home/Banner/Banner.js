import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-main px-4">
            <div className="md:px-12">
                <h1 className="text-3xl md:mb-12 md:text-5xl font-bold ">High Quality Medicines <br /> at Lowest Rates </h1>
                <p className="my-2 w-2/4">Get an Expert Medical Opinion from one of our world-renowned specialists so you can  have the answers and confidence  to make informed decisions about your health.</p>
                <div className="mt-12">
                    <Link to="/appointment" className="bg-blue-500 rounded mr-2 px-3 md:px-5 py-3 mt-6 text-white border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 ">Get Appointment</Link>
                    <Link to="/about" className="bg-transparent rounded ml-2 px-5 py-3 mt-6 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white ">Learn more</Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;