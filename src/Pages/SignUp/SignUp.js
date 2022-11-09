import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser, auth } = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserName(name, photoURL)
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    const updateUserName = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                console.log('display name')
            })
            .catch(error => console.error(error))

    }





    return (
        <div className="hero min-h-screen w-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Provide your valid email and password and explore many more </p>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='mx-auto my-3'>Already have an account<Link className='text-orange-600 font-bold' to='/login'>Sign UP</Link>  </p>
                </div>
            </div>
        </div >
    );
};

export default SignUp;