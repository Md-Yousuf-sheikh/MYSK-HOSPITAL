import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch("./doctor.json")
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return [doctor];

};

export default useDoctors;