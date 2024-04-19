import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2  col-md-6">
                            <div className="single-footer-widget">
                                <h6>Top Products</h6>
                                <ul className="footer-nav">
                                    <li><Link to="/">Managed Website</Link></li>
                                    <li><Link to="/">Manage Reputation</Link></li>
                                    <li><Link to="/">Power Tools</Link></li>
                                    <li><Link to="/">Marketing Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Contact Us</h6>
                                <h3>+91 123-456-7890</h3>
                                <h3>+91 098-765-4321</h3>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12">
                            <div className="single-footer-widget newsletter">
                                <h6>Newsletter</h6>
                                <p>You can trust us. we only send promo offers, not a single spam.</p>
                                <div id="mc_embed_signup">
                                    <form target="_blank" novalidate="true" action="/" className="form-inline">

                                        <div className="form-group row" style={{ width: "100%" }}>
                                            <div className="col-lg-8 col-md-12">
                                                <input name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required="" type="email" />
                                                <div style={{ position: "absolute", left: "-5000px" }}>
                                                    <input tabindex="-1" value="" type="text" />
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-12">
                                                <button className="nw-btn primary-btn">Subscribe<span className="lnr lnr-arrow-right"></span></button>
                                            </div>
                                        </div>
                                        <div className="info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row footer-bottom d-flex justify-content-between ">
                        <p className="col-lg-8 col-sm-12 footer-text m-0">
                            Copyright ©  2023 Dentist. All Rights Reserved
                        </p>
                        <div className="col-lg-4 col-sm-12 footer-social">
                            <Link to="/"><i className="fa fa-facebook"></i></Link>
                            <Link to="/"><i className="fa fa-twitter"></i></Link>
                            <Link to="/"><i className="fa fa-dribbble"></i></Link>
                            <Link to="/"><i className="fa fa-behance"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;