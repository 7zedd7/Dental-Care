import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    return (
        <>
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Contact Us
                            </h1>
                            <p className="text-white link-nav"><Link href="home">Home </Link>  <span className="lnr lnr-arrow-right"></span>  <Link to="/"> Contact Us</Link></p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-page-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className=" col-12 mb-5"  id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6385814.271093869!2d-106.95282817991452!3d38.601181364199775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sin!4v1689077562171!5m2!1sen!2sin"  style={{ border: "0", width:"100%" , height:"60vh" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-lg-4 d-flex flex-column address-wrap">
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-home"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>Binghamton, New York</h5>
                                    <p>
                                        4343 Hinkle Deegan Lake Road
                                    </p>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-phone-handset"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>00 (958) 9865 562</h5>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-envelope"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>support@colorlib.com</h5>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-area contact-form text-right" id="myForm">
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <input name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required="" type="text" />

                                        <input name="email" placeholder="Enter email address" className="common-input mb-20 form-control" required="" type="email" />

                                        <input name="subject" className="common-input mb-20 form-control" placeholder="Enter subject" required="" type="text" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <textarea className="common-textarea form-control" name="message" placeholder="Enter Messege" required=""></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="alert-msg" style={{ textAlign: "left" }}></div>
                                        <button className="genric-btn primary circle" style={{ float: "right" }}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactPage;