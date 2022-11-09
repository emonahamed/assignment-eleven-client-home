import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const { title, img, price, description, facility } = useLoaderData();


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-xl text-blue-400'>{facility}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;