import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CardDetails = () => {
    const { title, img, price, description, facility } = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user);


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-xl text-blue-400'>{facility}</p>
                <form>
                    <input type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-ghost w-full max-w-xs" />
                    <input type="text" placeholder="Type here" defaultValue={user?.email} className="input input-ghost w-full max-w-xs" />
                    <input type="text" placeholder="Type here" defaultValue={user?.photoURL} className="input input-ghost w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                    <button className="btn btn-primary mx-2">Add Review</button>

                </form>
            </div>



        </div>
    );
};

export default CardDetails;