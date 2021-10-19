import React, { useEffect, useState } from 'react';

const useService = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("./service.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return [service];
};

export default useService;