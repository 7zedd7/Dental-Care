import React from 'react'
import OpenHour from '../Componets/OpenHour';
import Service from '../Componets/Service';
import HomeAbout from '../Componets/HomeAbout';
import Testomial from '../Componets/Testomial';
import { Link } from 'react-router-dom';

const OpenHourPage = () => {
    return (
        <>
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container mb-5 pb-2">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Opening Hour
                            </h1>
                            <p className="text-white link-nav"><Link to="home">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/"> Opening Hour</Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pt-5"></div>
            <div className="mt-5">
                <OpenHour />
                <Service />
                <HomeAbout />
                <Testomial />
            </div>
        </>
    )
}
export default OpenHourPage;