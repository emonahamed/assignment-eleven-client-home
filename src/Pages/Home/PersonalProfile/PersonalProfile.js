import React from 'react';
import myimage from '../../../assests/myimage.jpg'

const PersonalProfile = () => {
    return (
        <div className="hero min-h-screen bg-gray-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={myimage} className="max-w-sm  w-full  rounded-lg shadow-2xl object-contain" />
                <div>
                    <h1 className="text-3xl font-semibold font-mono">Hello , so good to <br />
                        See You !
                    </h1>
                    <p className="py-6">
                        I'm professional photographer and retoucher with 5+ years of photo editing experience. <br />
                        Professional basic editing and complex photo manipulation as well.
                    </p>
                    <button className="btn btn-primary">Contct Me</button>
                </div>
            </div>
        </div>
    );
};

export default PersonalProfile;