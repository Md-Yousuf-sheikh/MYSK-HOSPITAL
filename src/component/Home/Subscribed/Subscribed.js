import React from 'react';

const Subscribed = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="container mx-auto bg-blue-400 rounded-lg p-14">
                <form>
                    <label className=" text-white text-4xl">Subscribe For Join Us! </label>
                    <div className="flex mt-2 items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                        <input className="  text-base text-gray-400 flex-grow outline-none px-2 " type="email" placeholder="Enter your email" />
                        <div className="flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                            <button className="bg-indigo-400 text-white text-base rounded-lg px-4 py-2 font-medium">Join Us</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subscribed;