import React from 'react';

const EveryReview = ({ everyReview }) => {
    const { message, photoURL, customer } = everyReview;
    // console.log(photoURL)
    // console.log(customer)
    return (
        <div>
            <div className="avatar">
                <div className="w-12 rounded">
                    <img src={photoURL} />

                </div>
                <p><span className='text-orange-500'> Name:</span> {customer} <br /> <span className='text-yellow-600'>Review:</span>{message}</p> <br />

            </div>
            {/* <p> </p> */}
        </div>
    );
};

export default EveryReview;