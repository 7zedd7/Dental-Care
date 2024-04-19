import React from 'react'
import Team from '../Componets/Team';
import Features from '../Componets/Features';
import { Link } from 'react-router-dom';

const ChoosePage = () => {
    return (
        <>
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Pricing Plan
                            </h1>
                            <p className="text-white link-nav"><Link to="home">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/"> Pricing Plan</Link></p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <---------============= ==============--------> */}

            <section className="price-area section-gap" id="price">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-8">
                            <div className="title text-center">
                                <h1 className="mb-10">Choose the best pricing for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-price no-padding">
                                <div className="price-top">
                                    <h4>Real basic</h4>
                                </div>
                                <ul className="lists">
                                    <li>2.5 GB Space</li>
                                    <li>Secure Online Transfer</li>
                                    <li>Unlimited Styles</li>
                                    <li>Customer Service</li>
                                </ul>
                                <div className="price-bottom">
                                    <div className="price-wrap d-flex flex-row justify-content-center">
                                        <span className="price">₹</span><h1> 339 </h1><span className="time">Per <br /> Month</span>
                                    </div>
                                    <Link to="/" className="primary-btn header-btn">Get Started</Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-price no-padding">
                                <div className="price-top">
                                    <h4>Real Standred</h4>
                                </div>
                                <ul className="lists">
                                    <li>10.0 GB Space</li>
                                    <li>Secure Online Transfer</li>
                                    <li>Unlimited Styles</li>
                                    <li>Customer Service</li>
                                </ul>
                                <div className="price-bottom">
                                    <div className="price-wrap d-flex flex-row justify-content-center">
                                        <span className="price">₹</span><h1> 669 </h1><span className="time">Per <br /> Month</span>
                                    </div>
                                    <Link to="/" className="primary-btn header-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-price no-padding">
                                <div className="price-top">
                                    <h4>Real Ultimate</h4>
                                </div>
                                <ul className="lists">
                                    <li>Unlimited Space</li>
                                    <li>Secure Online Transfer</li>
                                    <li>Unlimited Styles</li>
                                    <li>Customer Service</li>
                                </ul>
                                <div className="price-bottom">
                                    <div className="price-wrap d-flex flex-row justify-content-center">
                                        <span className="price">₹</span><h1> 999 </h1><span className="time">Per <br /> Month</span>
                                    </div>
                                    <Link href="/" className="primary-btn header-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
            <Features />
        </>
    )
}
export default ChoosePage;