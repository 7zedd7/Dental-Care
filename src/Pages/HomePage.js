import React from 'react'
import Hero from '../Componets/Hero';
import OpenHour from '../Componets/OpenHour';
import Service from '../Componets/Service';
import HomeAbout from '../Componets/HomeAbout';
import Testomial from '../Componets/Testomial';
import Team from '../Componets/Team';
import Features from '../Componets/Features';
import Appoinment from '../Componets/Appoinment';
import Blog from '../Componets/Blog';

const HomePage = () => {
    return (
        <>
            <Hero />
            <OpenHour />
            <Service />
            <HomeAbout />
            <Testomial />
            <Team />
            <Features />
            <Appoinment />
            <Blog />
        </>
    )
}
export default HomePage;