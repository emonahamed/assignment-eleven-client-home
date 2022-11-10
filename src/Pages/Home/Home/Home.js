import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import PersonalProfile from '../PersonalProfile/PersonalProfile';
import Ratings from '../Ratings/Ratings';
import Services from '../Services/Services';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <PersonalProfile></PersonalProfile>
            <Banner></Banner>
            <Services></Services>
            <Ratings></Ratings>


        </div>
    );
};

export default Home;