import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) => active && `border-bottom: 2px solid black; opacity: 1;`} `;
const ButtonGroup = styled.div`display: flex;`;
const types = ["Post", "Gallery"];

export const NgoDetailsPage = () => {

    // for first carousel
    const API_URL = 'https://ngo.createdinam.com/api/list';
    const POST_API_URL = 'https://ngo.createdinam.com/api/post_list';
    const [value, setValue] = useState(0); // State to track current slide
    const [start, setStart] = useState(null); // State to track interval for auto sliding
    const trailValues = [0, 20, 40, 60, 80];
    const intervalDuration = 4000; // 4 seconds for auto slide
    const [data, setData] = useState([]);
    const [PostData, setPostDataData] = useState([]);
    const [BannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [active, setActive] = useState(types[0]);
    const info = new URLSearchParams(useLocation().search);
    const id = info.get('query');

    const settings = {
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false, // Enable custom arrows,
        // prevArrow: <PreviousArrow />, // Use custom prev arrow
        // nextArrow: <NextArrow />,     // Use custom next arrow
    };

    const trail = document.querySelectorAll(".trail div"); // Selector for trail elements | query

    // Function to handle slide logic
    const slide = (direction) => {
        clearInterval(start); // Clear the existing interval
        let newValue;
        if (direction === 'increase') {
            newValue = (value + 20) % 100;
        } else {
            newValue = (value - 20 + 100) % 100;
        }
        setValue(newValue);
    };

    // Effect to start the automatic slider
    useEffect(() => {
        const autoSlide = setInterval(() => slide('increase'), intervalDuration);
        setStart(autoSlide);
        return () => clearInterval(autoSlide); // Cleanup interval on unmount
    }, [value]); // Re-run when value changes

    // Fetch data using useEffect hook
    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                const result = data.Ngos.filter(item => item.id === parseInt(id));
                setBannerData(result[0].banner_images ? JSON.parse(result[0].banner_images) : []);
                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                alert(error)
                setError(error);
                setLoading(false);
            });
        fetch(POST_API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPostDataData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const showInMapClicked = () => {
        window.open("https://maps.google.com?q=lat,long");
    };

    return (
        <>{loading === true ? <p>loading...</p> :
            <>
                <Slider {...settings}>
                    {BannerData.map((slide, index) => (
                        <div key={index} className='content-image'>
                            <img src={'https://ngo.createdinam.com/public/' + slide} alt={slide.alt} width={1920} height={850} />
                            <div className="box-92819">
                                <h1 className="text-white mb-3">Because Every Child Deserves a Future</h1>
                                <p><a href="#" className="btn btn-primary py-3 px-4 rounded-0">Your Compassion, Their Opportunity</a></p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="row">
                    <div className="focus_areas">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="event-29191 mb-5">
                                    <a href="#" className="d-block mb-3">
                                        <img src={'https://ngo.createdinam.com/public/' + data[0]?.logo} alt="Image" className="img-thumbnail rounded" style={{ width: "200px", height: "200px" }} />
                                    </a>
                                    <div className="px-3 d-flex">
                                        <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                                            <span className="text-white h3 m-0 d-block">{new Date(data[0]?.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', })}</span>
                                            <span className="text-white small"></span>
                                        </div>
                                        <div>
                                            <div className="mb-3">
                                                {/* <span className="mr-3"> <span className="fa-duotone fa-solid fa-hashtag"></span>  {data[0]?.ngo_reg_no}</span> */}
                                                <span> <a href={`mailto:${data[0]?.email}`}><span className="fa-solid fa-envelope"></span>  {data[0]?.email}</a></span>
                                            </div>
                                            <h3><a href="#">{data[0]?.ngo_name}</a></h3>
                                            <p>{data[0]?.description}</p>
                                            <span onClick={showInMapClicked}><span className="fa-solid fa-location-dot"></span>  {data[0]?.address}</span>
                                        </div>
                                        <div className="flex-wrap-container">
                                            <div className="flex-item">
                                                <a href={`${data[0]?.facebook_link}`} >
                                                    <i className="fa-brands fa-square-facebook fa-xl"></i>
                                                </a>
                                            </div>
                                            <div className="flex-item">
                                                <a href={`${data[0]?.instagram_link}`} >
                                                    <i className="fa-brands fa-square-instagram fa-xl"></i>
                                                </a>
                                            </div>
                                            <div className="flex-item">
                                                <a href={`${data[0]?.youtube_link}`} >
                                                    <i className="fa-brands fa-square-youtube fa-xl"></i>
                                                </a>
                                            </div>
                                            <div className="flex-item">
                                                <a href={`${data[0]?.twitter_link}`} >
                                                    <i className="fa-brands fa-square-twitter fa-xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <ButtonGroup className='center'>
                            {types.map((type) => (
                                <Tab
                                    key={type}
                                    active={active === type}
                                    onClick={() => setActive(type)}
                                >
                                    {type}
                                </Tab>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {active === 'Post' ?
                            <div>
                                <div className="site-section">
                                    <div className="container">
                                        <div className="col-md-12">
                                            <div className="heading">
                                                <h2 className="title text-cursive">Latest Causes</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {PostData?.posts?.map((info, index) =>
                                            (
                                                <div className="col-md-4">
                                                    <Link to={`/Posts?query=${info?.id}`} className="nav-link">
                                                        <div className="cause shadow-sm">
                                                            {JSON.parse(info?.post_slider_images)?.map((image, index) => (
                                                                <img key={index} src={'https://ngo.createdinam.com/public/' + image} alt="Image" className="img-fluid" />
                                                            ))}
                                                            <div className="custom-progress-wrap">
                                                                <span className="caption">80% complete</span>
                                                                <div className="custom-progress-inner">
                                                                    <div className="custom-progress bg-danger" style={{ width: '80%' }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                                                                <span className="badge-danger py-1 small px-2 rounded mb-3 d-inline-block">#{Math.floor(Math.random() * 100) + 1990278}</span>
                                                                <h3 className="mb-4">{info?.post_title}</h3>
                                                                <p className="mb-4">{info?.post_desc}</p>
                                                                <div className="border-top border-light border-bottom py-2 d-flex">
                                                                    <div>Donated</div>
                                                                    <div className="ml-auto"><strong className="text-primary">₹{index + 1}0,000</strong></div>
                                                                </div>
                                                                <div className="py-4">
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={'https://ngo.createdinam.com/public/' + info?.ngo?.logo} alt="Image" className="rounded-circle mr-3" width="50" />
                                                                        <div className="">{info?.ngo?.ngo_name} <br /> {info?.ngo?.address}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                            </div> :
                            <div>
                                <br /><br />
                                <div class="container">
                                    <div className="col-md-12">
                                        <div className="heading">
                                            <h2 className="title text-cursive"></h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        {BannerData.map((slide, index) => (
                                            <div key={index} class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe"><a href="">
                                                <img src={'https://ngo.createdinam.com/public/' + slide} class="img-responsive img-fluid" /></a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <br /><br /><br /><br /><br /><br />
                            </div>}
                    </div>
                </div>
            </>}
        </>
    )
}
