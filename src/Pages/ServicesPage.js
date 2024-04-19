import React from 'react'
import { Link } from 'react-router-dom'
import Testomial from '../Componets/Testomial';
import HomeAbout from '../Componets/HomeAbout';
import Service from '../Componets/Service';

const ServicesPage = () => {
    return (
        <>
            <section class="banner-area relative about-banner" id="home">
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="about-content col-lg-12">
                            <h1 class="text-white">
                                Services
                            </h1>
                            <p class="text-white link-nav"><Link to="home">Home </Link>  <span class="lnr lnr-arrow-right"></span>  <Link to="/"> Services</Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <Service/>
            <HomeAbout />
            <Testomial />

        </>
    )
}
export default ServicesPage;