import React from 'react';
import imageOne from '../../../assests/one.jpg';
import imageTwo from '../../../assests/two.jpg';
import imageThree from '../../../assests/three.jpg';
import imageFour from '../../../assests/four.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={imageOne} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 left-24  top-1/4">
                    <h2 className='text-5xl font-semibold text-white'>
                        Make Your <br />
                        Every Moment <br />
                        Count
                    </h2>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 left-24  top-1/2">
                    <h2 className='text-xl font-semibold text-black'>
                        If you want to make Your moment precious just give me a knock.
                    </h2>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-5 left-24  top-3/4">
                    <button className="btn btn-outline btn-error">Call Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={imageTwo} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 left-24  top-1/4">
                    <h2 className='text-5xl font-semibold text-white'>
                        Make Your <br />
                        Every Moment <br />
                        Count
                    </h2>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 left-24  top-1/2">
                    <h2 className='text-xl font-semibold text-black'>
                        If you want to make Your moment precious just give me a knock.
                    </h2>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-5 left-24  top-3/4">
                    <button className="btn btn-outline btn-error">Call Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={imageThree} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 left-24  top-1/4">
                    <h2 className='text-5xl font-semibold text-white'>
                        Make Your <br />
                        Every Moment <br />
                        Count
                    </h2>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 left-24  top-1/2">
                    <h2 className='text-xl font-semibold text-black'>
                        If you want to make Your moment precious just give me a knock.
                    </h2>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-5 left-24  top-3/4">
                    <button className="btn btn-outline btn-error">Call Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={imageFour} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 left-24  top-1/4">
                    <h2 className='text-5xl font-semibold text-white'>
                        Make Your <br />
                        Every Moment <br />
                        Count
                    </h2>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 left-24  top-1/2">
                    <h2 className='text-xl font-semibold text-black'>
                        If you want to make Your moment precious just give me a knock.
                    </h2>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-5 left-24  top-3/4">
                    <button className="btn btn-outline btn-error">Call Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;