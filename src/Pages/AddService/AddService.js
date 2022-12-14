import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    useTitle('addservice');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.imageURL.value;
        const price = form.price.value;
        const description = form.description.value;
        const facility = form.facility.value;


        const addService = {
            title: title,
            img: img,
            price: price,
            description: description,
            facility: facility,
        }


        fetch('https://assignment-eleven-server-ten.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('service added')
                    form.reset();

                }
            })
            .catch(err => console.error(err));


    }







    return (
        <div>
            <form onSubmit={handleAddService} >
                {/* <input name="name" type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" readOnly />
                <input name="email" type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" readOnly />
                <input name="photoURL" type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" readOnly />
                <textarea name="message" className="textarea w-full textarea-bordered" placeholder="Review"></textarea> <br /> */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <div>
                        <p className='mx-4 font-sans text-orange-500'>Title :</p>
                        <input name='title' type="text" placeholder="Title" className="input w-full max-w-xs " required />
                    </div>
                    <div>
                        <p className='mx-4  text-orange-500'>image URL:</p>
                        <input name='imageURL' type="url" placeholder="image URL" className="input w-full max-w-xs" required />
                    </div>
                    <div>
                        <p className='mx-4  text-orange-500'>Price:</p>
                        <input name='price' type="number" placeholder="Price" className="input w-full max-w-xs" required />
                    </div>
                    <div>
                        <p className='mx-4  text-orange-500'>Description:</p>
                        <input name='description' type="text" placeholder="Description" className="input w-full max-w-xs" required />
                    </div>

                    <div>
                        <p className='mx-4  text-orange-500'>Facility:</p>
                        <input name='facility' type="text" placeholder="Facility" className="input w-full max-w-xs" required />
                    </div>


                </div>
                <div className='text-center'>
                    <input className='btn btn-outline btn-info mx-2 m-5 ' type="submit" value="Add Service" />
                </div>

            </form>
            <ToastContainer />

        </div>
    );
};

export default AddService;