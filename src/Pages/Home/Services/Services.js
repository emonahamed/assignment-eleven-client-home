import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-eleven-server-ten.vercel.app/threeservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);




    return (
        <div>
            <div className='text-center mt-5'>
                <p className='text-2xl font-semi-bold text-blue-600'>Services</p>
                <p className='text-green-700 text-xl'>Take a Look at my services and give your opinion</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <div className='text-center'>
                <Link to='/allservice'> <button className="btn btn-wide">See All services</button></Link>
            </div>

        </div>
    );
};

export default Services;