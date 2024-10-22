import React from 'react'
import bg_1 from '../images/home_1.JPG'
import bg_2 from '../images/home_2.JPG'
import bg_3 from '../images/home_3.JPG'
import hero_1 from '../images/hero_1.jpg'
import img_3_gray from '../images/img_3_gray.jpg'
import img_2_gray from '../images/img_2_gray.jpg'
import img_1_gray from '../images/img_1_gray.jpg'
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpg'
import img_3 from '../images/img_3.jpg'
import person_1 from '../images/person_1.jpg'

export const Home = () => {
    return (
        <>

            <div className="owl-carousel-wrapper">



                <div className="box-92819">
                    <h1 className="text-white mb-3">Join The Movement To end Child Poverty</h1>
                    <p><a href="#" className="btn btn-primary py-3 px-4 rounded-0">Donate Now</a></p>
                </div>

                <div className="owl-carousel owl-1 ">
                    <div className="ftco-cover-1 overlay" style={{backgroundImage: `url(${bg_1})`}}></div>
                    <div className="ftco-cover-1 overlay" style={{backgroundImage: `url(${bg_2})`}}></div>
                    <div className="ftco-cover-1 overlay" style={{backgroundImage: `url(${bg_3})`}}></div>

                </div>
            </div>

            <div className="container">
                <div className="feature-29192-wrap d-md-flex" style={{marginTop: '-20px',  position: 'relative', zIndex: '2'}}>

                    <a href="#" className="feature-29192 overlay-danger" style={{backgroundImage: `url(${img_3_gray})`}}>
                        <div className="text">
                            <span className="meta">Livelihood</span>
                            <h3 className="text-cursive text-white h1">Livelihood</h3>
                        </div>
                    </a>

                    <a className="feature-29192 overlay-success" style={{backgroundImage: `url(${img_2_gray})`}}>
                        <div className="text">
                            <span className="meta">Health</span>
                            <h3 className="text-cursive text-white h1">Natural Remedies</h3>
                        </div>
                    </a>

                    <div className="feature-29192 overlay-warning" style={{backgroundImage: `url(${img_1_gray})`}}>
                        <div className="text">
                            <span className="meta">School</span>
                            <h3 className="text-cursive text-white h1">New Class Rooms</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div className="site-section">
                <div className="container">

                    <div className="row mb-5 align-items-st">
                        <div className="col-md-4">
                            <div className="heading-20219">
                                <h2 className="title text-cursive">Latest Causes</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ea reprehenderit rerum magnam, ipsum
                                aperiam. Earum, expedita ratione.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="cause shadow-sm">

                                <a href="posts.html" className="cause-link d-block">
                                    <img src={img_1} alt="Image" className="img-fluid" />
                                    <div className="custom-progress-wrap">
                                        <span className="caption">80% complete</span>
                                        <div className="custom-progress-inner">
                                            <div className="custom-progress bg-danger" style={{width:'80%'}}></div>
                                        </div>
                                    </div>
                                </a>

                                <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                                    <span className="badge-danger py-1 small px-2 rounded mb-3 d-inline-block">School</span>
                                    <h3 className="mb-4"><a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a></h3>
                                    <div className="border-top border-light border-bottom py-2 d-flex">
                                        <div>Donated</div>
                                        <div className="ml-auto"><strong className="text-primary">₹32,919</strong></div>
                                    </div>

                                    <div className="py-4">
                                        <div className="d-flex align-items-center">
                                            <img src={person_1} alt="Image" className="rounded-circle mr-3" width="50" />
                                            <div className="">Rahul Yadav <br /> Delhi, India</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="cause shadow-sm">

                                <a href="#" className="cause-link d-block">
                                    <img src={img_2} alt="Image" className="img-fluid" />
                                    <div className="custom-progress-wrap">
                                        <span className="caption">80% complete</span>
                                        <div className="custom-progress-inner">
                                            <div className="custom-progress bg-primary" style={{width:'80%'}}></div>
                                        </div>
                                    </div>
                                </a>

                                <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                                    <span className="badge-primary py-1 small px-2 rounded mb-3 d-inline-block">Health</span>
                                    <h3 className="mb-4"><a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a></h3>
                                    <div className="border-top border-light border-bottom py-2 d-flex">
                                        <div>Donated</div>
                                        <div className="ml-auto"><strong className="text-primary">₹32,919</strong></div>
                                    </div>

                                    <div className="py-4">
                                        <div className="d-flex align-items-center">
                                            <img src={person_1} alt="Image" className="rounded-circle mr-3" width="50" />
                                            <div className="">Mohit Chauhan <br /> Uttar Pradesh, India</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="cause shadow-sm">

                                <a href="#" className="cause-link d-block">
                                    <img src={img_3} alt="Image" className="img-fluid" />
                                    <div className="custom-progress-wrap">
                                        <span className="caption">80% complete</span>
                                        <div className="custom-progress-inner">
                                            <div className="custom-progress bg-warning" style={{width:'80%'}}></div>
                                        </div>
                                    </div>
                                </a>

                                <div className="px-3 pt-3 border-top-0 border border ">
                                    <span className="badge-warning py-1 small px-2 rounded mb-3 d-inline-block">Livelihood</span>
                                    <h3 className="mb-4"><a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a></h3>
                                    <div className="border-top border-light border-bottom py-2 d-flex">
                                        <div>Donated</div>
                                        <div className="ml-auto"><strong className="text-primary">₹32,919</strong></div>
                                    </div>

                                    <div className="py-4">
                                        <div className="d-flex align-items-center">
                                            <img src={person_1} alt="Image" className="rounded-circle mr-3" width="50" />
                                            <div className="">Amit Gupta <br /> haryana, India</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image overlay site-section" style={{backgroundImage: `url(${hero_1})` }}>
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="row mb-5">
                                <div className="col-md-7">
                                    <div className="heading-20219">
                                        <h2 className="title text-white mb-4 text-cursive">Why Choose Us</h2>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ipsam
                                            repellendus voluptatum, totam magni iusto numquam quo eos dolor perferendis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>1</span></div>
                                        <div>
                                            <h3>Odit Reiciendis</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id sint explicabo odit reiciendis
                                                eaque accusamus labore necessitatibus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>2</span></div>
                                        <div>
                                            <h3>Nisi Sint Explicabo</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id sint explicabo odit reiciendis
                                                eaque accusamus labore necessitatibus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>3</span></div>
                                        <div>
                                            <h3>Accusamus Labore Necessitatibus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id sint explicabo odit reiciendis
                                                eaque accusamus labore necessitatibus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>4</span></div>
                                        <div>
                                            <h3>Consectetur Dolor Elit</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id sint explicabo odit reiciendis
                                                eaque accusamus labore necessitatibus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








            <div className="site-section">
                <div className="container">
                    <div className="heading-20219 mb-5">
                        <h2 className="title text-cursive">Latest Event</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="event-29191 mb-5">
                                <a href="#" className="d-block mb-3"><img src={img_1} alt="Image" className="img-fluid rounded" /></a>
                                <div className="px-3 d-flex">

                                    <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                                        <span className="text-white h3 m-0 d-block">22</span>
                                        <span className="text-white small">Oct 2019</span>
                                    </div>

                                    <div>
                                        <div className="mb-3">
                                            <span className="mr-3"> <span className="icon-clock-o mr-2 text-muted"></span>9:30 AM &mdash; 11:30 AM</span>
                                            <span> <span className="icon-room mr-2 text-muted"></span>Ghana Africa</span>
                                        </div>
                                        <h3><a href="#">Ratione Delectus Assumenda Rem Modi Quaerat Laborum</a></h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="event-29191 mb-5">
                                <a href="#" className="d-block mb-3"><img src={img_2} alt="Image" className="img-fluid rounded" /></a>
                                <div className="px-3 d-flex">

                                    <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                                        <span className="text-white h3 m-0 d-block">22</span>
                                        <span className="text-white small">Oct 2019</span>
                                    </div>

                                    <div>
                                        <div className="mb-3">
                                            <span className="mr-3"> <span className="icon-clock-o mr-2 text-muted"></span>9:30 AM &mdash; 11:30 AM</span>
                                            <span> <span className="icon-room mr-2 text-muted"></span>Ghana Africa</span>
                                        </div>
                                        <h3><a href="#">Ratione Delectus Assumenda Rem Modi Quaerat Laborum</a></h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="site-section bg-image overlay-primary" style={{backgroundImage: `url(${img_1})`}}>
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-md-6">
                            <img src={img_1} alt="Image" className="img-fluid shadow" />
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white h-100 p-4 shadow">
                                <h3 className="mb-4 text-cursive">Donate Now</h3>
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Amount in Rupees" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Donate Now" className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="site-section">
                <div className="container">

                    <div className="d-md-flex cta-20101 align-self-center bg-light p-5">
                        <div className="">
                            <h2 className="text-cursive">Helping the Homeless, Hungry, and Hurtings Children</h2>
                        </div>
                        <div className="ml-auto"><a href="#" className="btn btn-primary">Donate Now</a></div>
                    </div>

                </div>
            </div>


        </>
    )
}
