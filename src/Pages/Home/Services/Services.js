import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);




    return (
        <div>
            <p className='text-2xl font-bold'>Services{services.length}</p>
        </div>
    );
};

export default Services;