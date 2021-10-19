import React from 'react';

const Docter = (props) => {
    const { name, img, category } = props.dr;
    return (
        <div>
            <div className="flex flex-col mb-3 md:mb-5 border-b-4 border-red-400  ">
                <img className="md:h-96" src={img} alt="" />
                <h1 className="text-3xl text-center">{name}</h1>
                <p className="text-center mb-3">{category}</p>
            </div>
        </div>
    );
};

export default Docter;