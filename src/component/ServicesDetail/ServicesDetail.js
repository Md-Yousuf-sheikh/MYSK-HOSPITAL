import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetail = (props) => {
    const { serviceId } = useParams();
    const [service, setService] = useState()
    useEffect(() => {
        const url = `/services/service-${serviceId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service);
    return (
        <>
            <div className="py-3 pb-5 bg-green-50 px-4">
                <h1 className="text-4xl md:text-5xl pb-5 text-blue-400 text-center font-medium">{service?.name} <i className={`text-blue-400 ${service?.icon}`}></i> </h1>

                <div className="grid py-5  lg:grid-cols-2">
                    <div className="px-3">
                        <img className="mx-auto rounded shadow-lg hover:shadow " src={service?.img} alt="" />
                    </div>
                    <div className="px-3">
                        <h3 className="text-2xl text-justify pb-2 text-blue-400">{service?.subTitle}</h3>
                        <p className="text-justify pb-2">{service?.descripton}</p>
                    </div>

                </div>

            </div>
            <div className="p-4 bg-blue-200 shadow-lg ">
            </div>
        </>
    );
};

export default ServicesDetail;