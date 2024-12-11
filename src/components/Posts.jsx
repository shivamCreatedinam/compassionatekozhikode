import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../images/banner_1.JPG'
import banner2 from '../images/banner_2.JPG'
import banner3 from '../images/banner_3.JPG'
import banner4 from '../images/banner_4.JPG'
import banner5 from '../images/banner_5.JPG'
import person_1 from '../images/img_1.jpg'
import product1 from '../images/61dcXwvdaGL._SX679_.jpg'
import product2 from '../images/81YOl3qrG5L._SX679_.jpg'
import product3 from '../images/81dKUtgqzuL._SX679_.jpg'
export const Posts = () => {

    // for first carousel
    const API_URL = 'https://ngo.createdinam.com/api/post_list';
    const [value, setValue] = useState(0); // State to track current slide
    const [start, setStart] = useState(null); // State to track interval for auto sliding
    const trailValues = [0, 20, 40, 60, 80];
    const intervalDuration = 4000; // 4 seconds for auto slide
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const info = new URLSearchParams(useLocation().search);
    const id = info.get('query');

    const trail = document.querySelectorAll(".trail div"); // Selector for trail elements

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

    // Function to handle click on Next/Previous buttons
    const handleButtonClick = (direction) => {
        slide(direction);
    };

    // Function to handle click on trail dots
    const clickCheck = (index) => {
        clearInterval(start);
        setValue(trailValues[index]);
    };

    // Swipe detection
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (startX - endX > 50) {
            slide('increase');
        } else if (endX - startX > 50) {
            slide('decrease');
        }
    };

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
                const result = data.posts.filter(item => item.id === parseInt(id));
                setData(result[0]);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    // backdrop-filter:blur(8px) saturate(150%)
    return (
        <>
            {loading === true ? <p>loading...</p> :
                <>
                    <div className="ngo-post">
                        <div className="post-left">
                            <h2 class="post_name">{data?.post_title}</h2>
                            <div class="line"></div>
                            <h3>{data?.post_desc}</h3>
                        </div>
                        <div className="post-right">
                            <div className="col-md-6 right_content">
                                <div className="event-29191 mb-5">
                                    <a href="#" className="d-block mb-3"><img src={'https://ngo.createdinam.com/public/' + JSON.parse(data?.post_banner_images)[0]} alt="Image" className="img-fluid rounded" /></a>
                                    <div className="px-3 d-flex">

                                        <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date ">
                                            <span className="text-white h3 m-0 d-block">11</span>
                                            <span className="text-white small">Dec 2024</span>
                                        </div>

                                        <div>
                                            <h3><a href="#">{data?.ngo?.ngo_name}</a></h3>
                                            <div className="mb-3">
                                                <span> <span className="icon-room mr-2 text-muted"></span>{data?.ngo?.address}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  progress bar  */}

                    <div className="container">
                        <div className="title">
                            <h1>How we are Doing?</h1>
                            <p>The Human Touch is a compassionate organization dedicated to transforming the lives of children in observation homes. With a mission to provide care, protection, and empowerment, we work tirelessly to ensure that every child has the opportunity to grow, thrive, and envision a brighter future.</p>
                        </div>
                        <br />
                    </div>

                    {/* Amazon Products  */}
                    {/* <div class="amazon-section">
                        <h1 class="products_heading">What You can do to contribute, <br /> cause every small support makes a big change</h1>

                        <div class="products_section">
                            <div class="product_wrapper">
                                <img class="product_img" src={product1} alt="" />
                                <div class="product_desc">
                                    <h3>Rabbit Little Genius Learner Kids Study Table Set with Chair</h3>
                                    <p>Safety First : R for Rabbit Little Genius Learner comes with smooth curved design in table and chair to
                                        make study time injury free.</p>
                                    <p>₹5,236</p>
                                    <a target="_blank"
                                        href="https://www.amazon.in/Rabbit-Little-Learner-Multifunctional-Capacity/dp/B0CQ23SG6N/ref=sr_1_7?crid=24JQO99LYQXDE&dib=eyJ2IjoiMSJ9.CGENOsAVVUd1gdsWyCQpLNVHUo9vRzn-2wyU40sXjkCS_kyv2lQqihL0qPmvGJXyWceecFHH5WxKMaYE9f-W2I13Z-sfK_BCKTlpEnD1MChJOknt0iVVvdxKtK1ZXKROcDnpJZZIeEhOraGnkt8SU9GPImw2FsDrYzS5cbSr2PF1ypOzNQfvKrRNJq8X9GwjivuJvhgDCIEixDoM8zBcTMSKaXTsOa40DjQs9kL0Z3tx7oOB1zzwy-FrtY4w2s4Kw29bMyali4l2VFNctubdxMSALVSgi03yCYgpZoJRQ3Y.2J3rGIYivSb51fePjBJumgj0yt8IJtSqjwWwD5OkNBA&dib_tag=se&keywords=amazon%2Bkids%2Bstudy%2Bchair&nsdOptOutParam=true&qid=1729743943&sprefix=amazon%2Bkid%2Bstudy%2Bchair%2Caps%2C230&sr=8-7&th=1"><button
                                            class="custom-btn btn-7 donate-btn"><span>Donate</span></button></a>
                                </div>
                            </div>
                            <div class="product_wrapper">
                                <img class="product_img" src={product2} alt="" />
                                <div class="product_desc">
                                    <h3>Alex Daisy Pluto Kids Height Adjustable Study Table</h3>
                                    <p>Height adjustable study table and chair. Inclinable working top. Drawer with telescopic channel Rounded
                                        Corners with no sharp edges.</p>
                                    <p> ₹9,950</p>
                                    <a target="_blank"
                                        href="https://www.amazon.in/dp/B06XXPRS6C/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B06XXPRS6C&pd_rd_w=4zb3n&content-id=amzn1.sym.413ef885-ae1b-472f-afa4-d683cda6ad0d&pf_rd_p=413ef885-ae1b-472f-afa4-d683cda6ad0d&pf_rd_r=XGSNJ0P6WYZ1PEWYGPDJ&pd_rd_wg=E45x1&pd_rd_r=5fb9552a-5750-42d5-8b06-6fa44f162bad&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"><button
                                            class="custom-btn btn-7 donate-btn"><span>Donate</span></button></a>
                                </div>
                            </div>
                            <div class="product_wrapper">
                                <img class="product_img" src={product3} alt="" />
                                <div class="product_desc">
                                    <h3>MLU Kids Study Table and Chair Set (Pink) Height</h3>
                                    <p>Fully Laminated Graphics and Pictures in Both Table and Chair include Table Top, Head of Top, Chair Seat
                                        and Chair Back Rest.</p>
                                    <p> ₹2,999</p>
                                    <a target="_blank"
                                        href="https://www.amazon.in/dp/B08TMGYD37/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B08TMGYD37&pd_rd_w=AaEFB&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=XGSNJ0P6WYZ1PEWYGPDJ&pd_rd_wg=E45x1&pd_rd_r=5fb9552a-5750-42d5-8b06-6fa44f162bad&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM"><button
                                            class="custom-btn btn-7 donate-btn"><span>Donate</span></button></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </>}
        </>
    )
}
