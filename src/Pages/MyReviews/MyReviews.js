import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});



    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    console.log(reviews);
    return (
        <div>

            <h2>you have {reviews.length}</h2>






        </div>
    );
};

export default MyReviews;