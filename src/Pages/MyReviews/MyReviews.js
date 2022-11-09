import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                    alert('deleted successfull');
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



        </div>
    );
};

export default MyReviews;