import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header id="header" >
                <div className="container-fluid main-menu">
                   < nav className="navbar navbar-expand-lg container navbar-light py-0 my-0">
                        <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                            <Link to="home"><img src="img/logo.png" alt="" title="" style={{ height: "50px", width: "180px" }} /></Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav-menu navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <Link to="/home">Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/openhour">Opening Hour </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/services">Services</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </nav >
                </div>
               </header >

            {/* <!-- #header --> */}
        </>
    )
}
export default Navbar;