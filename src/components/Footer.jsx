import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {


    const subscribe = () => {
        alert('Subscribe for Updates')
    }

    return ( 
        <div>
            <footer className="site-footer bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2 className="footer-heading mb-4">About Us</h2>
                                    <p>The Human Touch is a compassionate organization dedicated to transforming the lives of children in observation homes. With a mission to provide care, protection, and empowerment, we work tirelessly to ensure that every child has the opportunity to grow, thrive, and envision a brighter future.</p>

                                </div>
                                <div className="col-md-4 ml-auto">
                                    <h2 className="footer-heading mb-4">Features</h2>
                                    <ul className="list-unstyled">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/eventlist">Event</Link></li>
                                        <li><Link to="/blogs">Blog</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 ml-auto">

                            <div className="mb-5">
                                <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
                                <form className="footer-suscribe-form">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control rounded-0 border-secondary text-white bg-transparent"
                                            placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary text-white" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <h2 className="footer-heading mb-4">Follow Us</h2>
                            <a href="#about-section" className="smoothscroll pl-0 pr-3"><span className="icon-facebook"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>

                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="pt-5">
                                <p>
                                    Copyright &copy; 2024 All rights reserved | 💖 by <a href="https://vseoarena.com/"
                                            target="_blank">vseoarena</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer >


        </div >
    )
}
