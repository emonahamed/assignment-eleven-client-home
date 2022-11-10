import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-eleven-server-ten.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`https://assignment-eleven-server-ten.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                    // alert('deleted successfull');
                    <div className="toast toast-top toast-start">
                        <div className="alert alert-success">
                            <div>
                                <span>Message sent successfully.</span>
                            </div>
                        </div>
                    </div>
                }
            })

    }





    return (
        <div>


            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></ReviewCard>)
                }
            </div>


            {/* {
                reviews ?
                    <>

                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                            {
                                reviews?.map(review => <ReviewCard
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></ReviewCard>)
                            }
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <p>ok</p>
                        </div>
                    </>
            } */}



        </div>
    );
};

export default MyReviews;