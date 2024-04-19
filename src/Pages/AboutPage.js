import React from 'react'
import { Link } from 'react-router-dom';
import Features from '../Componets/Features';
import HomeAbout from '../Componets/HomeAbout';
import Service from '../Componets/Service';
import Testomial from '../Componets/Testomial';

const AboutPage = () => {
    return (
        <>
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                About Us
                            </h1>
                            <p className="text-white link-nav"><Link to="home">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/"> About Us</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <Features />
            <Service />
            <HomeAbout />
            <Testomial />
        </>
    )
}
export default AboutPage;