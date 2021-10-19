import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetail = (props) => {
    const { serviceId } = useParams();
    const [service, setService] = useState()
    useEffect(() => {
        const url = `./service.json/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log("hello", service);
    return (
        <div>
            <h1 className="text-3xl text-center">Hello{serviceId}</h1>
        </div>
    );
};

export default ServicesDetail;