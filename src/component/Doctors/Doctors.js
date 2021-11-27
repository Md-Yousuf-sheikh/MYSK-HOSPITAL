import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../Hooks/useDoctors';
import Docter from './Docter';

const Doctors = () => {
    const [doctor] = useDoctors([])
    return (
        <div>
            <div className="bg-blue-50 py-5 mb-3">
                <h1 className="text-center py-3 lg:text-5xl text-4xl text-blue-500 font-bold ">Our Doctors</h1>
                <div className="text-center py-5 text-blue-400">
                    <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium text-blue-400">Doctor</span>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 py-3 md:grid-cols-2 mx-auto container px-4 xl:grid-cols-4 gap-4">
                {
                    doctor.map(dr => <Docter dr={dr} key={dr.id} />)
                }
            </div>
        </div>
    );
};

export default Doctors;