import React from 'react';

const EveryReview = ({ everyReview }) => {
    const { message, photoURL } = everyReview;
    // console.log(photoURL)
    return (
        <div>
            <div className="avatar">
                <div className="w-12 rounded">
                    <img src={photoURL} />
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default EveryReview;