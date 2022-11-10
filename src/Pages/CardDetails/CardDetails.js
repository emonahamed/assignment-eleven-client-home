import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CardDetails = () => {
    const { _id, title, img, price, description, facility } = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user, _id);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const message = form.message.value;
        const photoURL = user?.photoURL;
        console.log(name, email, message, photoURL, _id);


        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message,
            photoURL: photoURL
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review done')
                    form.reset();

                }
            })
            .catch(err => console.err(err));

    }










    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-xl text-blue-400'>{facility}</p>
                {user?.email ?
                    <>
                        <form onSubmit={handleReview}>
                            <input name="name" type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-ghost w-full max-w-xs" readOnly />
                            <input name="email" type="text" placeholder="Type here" defaultValue={user?.email} className="input input-ghost w-full max-w-xs" readOnly />
                            <input name="photoURL" type="text" placeholder="Type here" defaultValue={user?.photoURL} className="input input-ghost w-full max-w-xs" readOnly />
                            {/* <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" /> */}
                            <textarea name="message" className="textarea w-full textarea-bordered" placeholder="Review"></textarea> <br />
                            <input className='btn btn-outline mx-2' type="submit" value="Add Review" />

                        </form>
                    </>
                    :
                    <p>please <Link className='text-red-500' to='/login'>login</Link>  in to add a review</p>


                }
            </div>



        </div>
    );
};

export default CardDetails;




//     user?.email ?
//         <>
//             < li className='font-semibold'> <Link to='/myreviews'>My Reviews</Link> </li>

//             < li className='font-semibold'>
//                 <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
//             </li>
//         </>
//         :
//         < li className='font-semibold'> <Link to='/login'>Login</Link> </li>

// 