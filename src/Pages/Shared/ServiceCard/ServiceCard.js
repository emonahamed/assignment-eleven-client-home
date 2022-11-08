import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { img, price, title, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-64 overflow-hidden " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-3xl'>{price}</p>
                <p className='text-xl'>{description.slice(0, 200)}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-info">Review</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;