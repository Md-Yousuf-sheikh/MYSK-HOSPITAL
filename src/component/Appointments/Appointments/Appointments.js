import React from 'react';
import { Link } from 'react-router-dom';

const Appointments = () => {
    return (
        <div>
            <div className="bg-blue-50 py-5 mb-3">
                <h1 className="text-center py-3 lg:text-5xl text-4xl text-blue-500 font-bold ">Appointments</h1>
                <div className="text-center py-5 text-blue-400">
                    <Link to="/" className="hover:text-blue-600">Home</Link> / <span className="font-medium text-blue-400">Appointments</span>
                </div>
            </div>
            <div>
                <h1>Appointments</h1>
            </div>
        </div>
    );
};

export default Appointments;