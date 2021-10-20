import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import Expert from './Expert';

const Experts = () => {
    const [doctor] = useDoctors([]);
    return (
        <div className="bg-red-50 py-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center my-5   text-blue-400 font-bold">Meet Our Doctors</h1>
            <p className="text-center mb-3 text-2xl font-serif ">Our expert doctor!</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-auto container px-4 gap-4">

                {
                    doctor.slice(0, 3).map(dr => <Expert dr={dr} key={dr.id} />)
                }

            </div>
        </div>
    );
};

export default Experts;