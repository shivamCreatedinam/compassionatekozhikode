import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import img_1 from '../images/img_1.jpg'

import livelihood from '../images/livelihood.JPG'
import natural from '../images/natural.JPG'
import classroom from '../images/classroom.jpg'
import bg from '../images/bg.JPG'

import bg_1 from '../images/home_1.JPG'
import bg_2 from '../images/home_2.JPG'
import bg_3 from '../images/home_3.JPG'

// import ReactFullscreenSlideshow from "react-fullscreen-slideshow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const SLIDES = [
    { src: bg_1, alt: 'Image 1', title: 'Join The Movement To end Child Poverty', button_name: 'Donate', link: 'donate' },
    { src: bg_3, alt: 'Image 2', title: 'From Hunger to Hope – Together, We Fight', button_name: 'Donate', link: 'donate' },
    { src: bg_2, alt: 'Image 3', title: 'Empowering Communities, Inspiring Hope', button_name: 'Donate', link: 'donate' },
    { src: bg_3, alt: 'Image 4', title: 'Transforming Lives, One Step at a Time', button_name: 'Donate', link: 'donate' },
];

export const Home = () => {

    const API_URL = 'https://ngo.createdinam.com/api/post_list';
    const EVENT_APIS = 'https://ngo.createdinam.com/api/event_list';
    const [data, setData] = useState(null);
    const [EventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // prevArrow: <SamplePrevArrow />,
        // nextArrow: <SampleNextArrow />,
        beforeChange: (prev, next) => setDotActive(next),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    appendDots: (dots) => (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "2%",
                                transform: "translateY(-50%)",
                            }}
                        >
                            <ul style={{ margin: "0px" }}> {dots} </ul>
                        </div>
                    ),
                    customPaging: (i) => (
                        <div
                            style={
                                i === dotActive
                                    ? {
                                        width: "25px",
                                        color: "#262626",
                                        borderRight: "3px #262626 solid",
                                        cursor: "pointer",
                                        fontSize: "12px",
                                    }
                                    : {
                                        width: "25px",
                                        color: "transparent",
                                        borderRight: "3px white solid",
                                        cursor: "pointer",
                                        fontSize: "12px",
                                    }
                            }
                        >
                            0{i + 1}
                        </div>
                    ),
                },
            },
        ],
    };


    // Fetch data using useEffect hook
    useEffect(() => {
        // getLoginuserDetails();
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        fetch(EVENT_APIS)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(JSON.stringify(data));
                setEventData(data?.events);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const getLoginuserDetails = () => {
        const savedUser = sessionStorage.getItem("user");
        console.log('getLoginuserDetails', savedUser);
    }

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     adaptiveHeight: true,
    //     lazyLoad: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     fade: true,
    //     arrows: false, // Enable custom arrows,
    //     // prevArrow: <PreviousArrow />, // Use custom prev arrow
    //     // nextArrow: <NextArrow />,     // Use custom next arrow
    // };


    const handleRegisterSubmit = () => {
        alert('Your Donation Request Submit Successfully!')
    }


    return (
        <>
            <div className="block block-sliders color-white nav-center">
                <Slider {...settings}>
                    {SLIDES.map((slide, index) => (
                        <div className='content-image' key={index}>
                            <img width={1920} height={850} src={slide.src} alt="Image Slider" />
                            <div className="box-92819">
                                <h1 className="text-white mb-3">{slide.title}</h1>
                                {/* <p><a href="#" className="btn btn-primary py-3 px-4 rounded-0">{slide.button_name}</a></p> */}
                            </div>
                        </div>
                    ))}
                </Slider>
                <div class="swiper-pagination"></div>
                {/* <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> */}
                <div class="swiper-scrollbar"></div>
            </div>
            {/* <div className='about_carousel_container' >
                <Slider {...settings}>

                </Slider>
            </div> */}
            {/* <div className="owl-carousel-wrapper">
                <div className="box-92819">
                    <h1 className="text-white mb-3">Join The Movement To end Child Poverty</h1>
                    <p><a href="#" className="btn btn-primary py-3 px-4 rounded-0">Donate Now</a></p>
                </div>
                <div className="owl-carousel owl-1 ">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${bg_1})` }}></div>
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${bg_2})` }}></div>
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${bg_3})` }}></div>
                </div>
            </div> */}
            <div className="container">
                <div className="feature-29192-wrap d-md-flex" style={{ marginTop: '-20px', position: 'relative', zIndex: '2' }}>
                    <a href="#" className="feature-29192 overlay-danger" style={{ backgroundImage: `url(${livelihood})` }}>
                        <div className="text">
                            <span className="meta">Livelihood</span>
                            <h3 className="text-cursive text-white h1">Livelihood</h3>
                        </div>
                    </a>
                    <a className="feature-29192 overlay-success" style={{ backgroundImage: `url(${natural})` }}>
                        <div className="text">
                            <span className="meta">Health</span>
                            <h3 className="text-cursive text-white h1">Natural Remedies</h3>
                        </div>
                    </a>
                    <div className="feature-29192 overlay-warning" style={{ backgroundImage: `url(${classroom})` }}>
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
                        <div className="col-md-12">
                            <div className="heading">
                                <h2 className="title text-cursive">Latest Causes</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {data?.posts?.map((info, index) =>
                        (
                            <div className="col-md-4">
                                <div className="cause shadow-sm">
                                    <Link to={`/Posts?query=${info?.id}`} className="nav-link">
                                        {JSON.parse(info?.post_slider_images)?.map((image, index) => (
                                            <img key={index} src={'https://ngo.createdinam.com/public/' + image} alt="Image" className="img-fluid" />
                                        ))}
                                        <div className="custom-progress-wrap">
                                            <span className="caption">80% complete</span>
                                            <div className="custom-progress-inner">
                                                <div className="custom-progress bg-danger" style={{ width: '80%' }}></div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                                        <span className="badge-danger py-1 small px-2 rounded mb-3 d-inline-block">#{Math.floor(Math.random() * 100) + 1990278}</span>
                                        <h3 className="mb-4">
                                            {info?.post_title}
                                        </h3>
                                        <p className="mb-4">
                                            {info?.post_desc.slice(0, 160)}...
                                        </p>
                                        <div className="border-top border-light border-bottom py-2 d-flex">
                                            <div>Donated</div>
                                            <div className="ml-auto"><strong className="text-primary">{info?.donation_amount}</strong></div>
                                        </div>
                                        <Link to={`/ngodetails?query=${info?.ngo?.id}`} className="nav-link">
                                            <div className="py-4">
                                                <div className="d-flex align-items-center">
                                                    <img src={'https://ngo.createdinam.com/public/' + info?.ngo?.logo} alt="Image" className="rounded-circle mr-3" width="50" />
                                                    <div className="">{info?.ngo?.ngo_name} <br /> {info?.ngo?.address}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-image overlay site-section" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <div className="heading-20219 align-items-center">
                                        <h2 className="title text-white mb-4 text-cursive">Why Choose Us</h2>
                                        <p className="text-white">We aim to create a world where every child, regardless of their circumstances, feels valued, nurtured, and supported. By addressing their immediate needs and investing in their long-term development, we strive to foster resilience and self-reliance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>1</span></div>
                                        <div>
                                            <h3>Yoga and Meditation</h3>
                                            <p>Designed to foster mental clarity and emotional balance, helping the children cope with their past experiences and build resilience for the future.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>2</span></div>
                                        <div>
                                            <h3>Physical Education</h3>
                                            <p>A vital component in ensuring the physical well-being and discipline of the children, promoting a healthy lifestyle.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>3</span></div>
                                        <div>
                                            <h3>Skill Development</h3>
                                            <p>Computer training and other vocational courses aim to equip the children with practical skills that will serve them well in their personal and professional lives.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="feature-29012 d-flex">
                                        <div className="number mr-4"><span>4</span></div>
                                        <div>
                                            <h3>Academic Growth</h3>
                                            <p>In partnership with prestigious public schools in the district, children receive quality education, with additional support provided through home tutoring to ensure no child is left behind.</p>
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
                        {EventData?.map((info, index) =>
                        (<div className="col-md-6">
                            <div className="event-29191 mb-5">
                                <a href="#" className="d-block mb-3">
                                    {info.event_banner ? JSON.parse(info.event_banner)?.map((info, index) => <img src={'https://ngo.createdinam.com/public/' + info} alt="Image" className="img-fluid rounded" />) : null}
                                </a>
                                <div className="px-3 d-flex">
                                    <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                                        <span className="text-white h3 m-0 d-block">{new Date(info?.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', })}</span>
                                        <span className="text-white small"></span>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <span className="mr-3"> <span className="icon-clock-o mr-2 text-muted"></span>{new Date(info?.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', })}</span>
                                            <span> <span className="icon-room mr-2 text-muted"></span>Hariyana, Meerut</span>
                                        </div>
                                        <h3><a href="#">{info?.event_title}</a></h3>
                                        <p>{info?.event_short_desc}</p>
                                    </div>

                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>


            <div className="site-section bg-image overlay-primary" style={{ backgroundImage: `url(${img_1})` }}>
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-md-6">
                            <img src={bg} alt="Image" className="img-fluid shadow" />
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white h-100 p-4 shadow">
                                <h3 className="mb-4 text-cursive">Donate Now</h3>
                                <form onSubmit={handleRegisterSubmit} >
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Amount in Rupees" required />
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
                        <div className="ml-auto"><Link to="/ngo_list" className="btn btn-primary">Donate Now</Link></div>
                    </div>

                </div>
            </div>


        </>
    )
}
