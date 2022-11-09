import React, { useEffect, useState } from 'react';

const ReviewCard = ({ review, handleDelete }) => {
    const { _id, email, serviceName, message, service } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p className='text-blue-400'>Review : {message}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;