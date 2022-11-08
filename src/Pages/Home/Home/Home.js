import React from 'react';
import Banner from '../Banner/Banner';
import PersonalProfile from '../PersonalProfile/PersonalProfile';
import Ratings from '../Ratings/Ratings';


const Home = () => {
    return (
        <div>
            <PersonalProfile></PersonalProfile>
            <Banner></Banner>
            <Ratings></Ratings>


        </div>
    );
};

export default Home;