import React from 'react';
import { Link } from 'react-router-dom';
import ServItem from '../Home/Service/ServItem';
import useService from '../Hooks/useService';

const Services = () => {
    const [service] = useService([])
    return (
        <div>
            <div className="bg-blue-50 py-5 mb-3">
                <h1 className="text-center py-3 lg:text-5xl text-4xl text-blue-500 font-bold ">Our Services</h1>
                <div className="text-center py-5 text-blue-400">
                    <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium text-blue-400">Service</span>
                </div>
                <p className="mb-3 text-center ">There are best doctor our service is best expert doctor   </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 mt-5">
                {
                    service.map(srvc =>
                        <div>
                            <div className="flex flex-col m-3 hover:shadow-lg py-5 px-3 overflow-hidden text-center">
                                <img src={srvc.img} alt="" />
                                <h1 className="text-3xl md:text-4xl py-3 text-bold text-blue-400">{srvc.name}</h1>
                                <p className="mb-4 text-justify text-2xl text-blue-400 ">{srvc.subTitle}</p>
                                <p className="text-justify">{srvc.descripton}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;