import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Service from './Service/Service';
import Subscribed from './Subscribed/Subscribed';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Experts />
            <Subscribed />
        </div>
    );
};

export default Home;