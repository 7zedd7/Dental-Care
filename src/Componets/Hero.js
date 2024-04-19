import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="pt-5"></div>
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container mb-5 mt-4 py-5">
                    <div className="row fullscreen d-flex justify-content-center align-items-center">
                        <div className="banner-content col-lg-9 col-md-12 justify-content-center">
                            <h6 className="text-uppercase">Don’t look further, This is your Dentist</h6>
                            <h1>
                                Authentic Dental Service
                            </h1>
                            <p className="text-white mx-auto">
                                If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each. You may be saying to yourself.
                            </p>
                            <Link to="#" className="primary-btn header-btn text-uppercase mt-10 my-0 my-lg-4">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;