import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { _id, img, price, title, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">

                {/* <img src={img} alt="Shoes" className="rounded-xl w-64 overflow-hidden " /> */}

                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" className="rounded-xl w-64 overflow-hidden " />
                    </PhotoView>
                </PhotoProvider>





            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-3xl'>{price}</p>
                <p className='text-xl'>{description.slice(0, 200)}</p>
                <div className="card-actions">
                    <Link to={`/carddetails/${_id}`}>
                        <button className="btn btn-outline btn-info">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;