import React from 'react';
import { Link } from 'react-router-dom';

const ServItem = (props) => {
    // const service = props.item;
    const { name, icon, subTitle } = props.item;
    // console.log(service);
    return (
        <div>
            <div>
                <div className="flex flex-col m-3 hover:shadow-lg py-5 px-3 overflow-hidden text-center">
                    <h1 className="text-blue-500 p-3 text-6xl"><i className={icon}></i></h1>
                    <h1 className="text-2xl text-bold">{name}</h1>
                    <p className="mb-4 ">{subTitle}</p>
                    <Link to="/services" className="bg-blue-400 text-white hover:bg-transparent border-2 border-blue-400 hover:text-blue-500 shadow-md px-11 py-2">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default ServItem;