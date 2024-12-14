import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/slider_one.jpg'
import img2 from '../images/slider_two.jpg'
import img3 from '../images/slider_three.jpg'
import img4 from '../images/slider_four.jpg'
import img5 from '../images/slider_five.jpg'
import img6 from '../images/slider_six.jpg'
import img7 from '../images/slider_seven.jpg'

import banner from '../images/banner_1.JPG';

const SLIDES = [
    { src: img1, alt: 'Image 1', title: 'In every child’s smile lies the promise of a better world.', button_name: 'Donate', link: 'donate' },
    { src: img2, alt: 'Image 2', title: 'Support. Protect. Empower. Every child matters.', button_name: 'Donate', link: 'donate' },
    { src: img3, alt: 'Image 3', title: 'A safe haven today builds confident leaders for tomorrow.', button_name: 'Donate', link: 'donate' },
    { src: img4, alt: 'Image 4', title: 'Let’s create a world where no child feels forgotten.', button_name: 'Donate', link: 'donate' },
    { src: img5, alt: 'Image 4', title: 'Let’s create a world where no child feels forgotten.', button_name: 'Donate', link: 'donate' },
    { src: img6, alt: 'Image 4', title: 'Let’s create a world where no child feels forgotten.', button_name: 'Donate', link: 'donate' },
    { src: img7, alt: 'Image 4', title: 'Let’s create a world where no child feels forgotten.', button_name: 'Donate', link: 'donate' },
];
const PreviousArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: 'block',
            background: 'blue', // Circle color
            borderRadius: '50%', // Circle shape
            width: '40px', // Circle diameter
            height: '40px', // Circle diameter
            color: 'white', // Arrow color
            display: 'flex', // Center content
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            fontSize: '18px', // Arrow size
            zIndex: 1 // Ensure it's on top
        }}
        onClick={onClick}
    >
        {/* Left arrow symbol */}
    </div>
);

// Custom Next Arrow (Circular)
const NextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: 'block',
            background: 'blue', // Circle color
            borderRadius: '50%', // Circle shape
            width: '40px', // Circle diameter
            height: '40px', // Circle diameter
            color: 'white', // Arrow color
            display: 'flex', // Center content
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            fontSize: '18px', // Arrow size
            zIndex: 1 // Ensure it's on top
        }}
        onClick={onClick}
    >
        {/* Right arrow symbol */}
    </div>
);

export const NGOList = () => {

    // for first carousel
    const API_URL = 'https://ngo.createdinam.com/api/list';
    const [value, setValue] = useState(0); // State to track current slide
    const [start, setStart] = useState(null); // State to track interval for auto sliding
    const trailValues = [0, 20, 40, 60, 80];
    const intervalDuration = 4000; // 4 seconds for auto slide
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false, // Enable custom arrows,
        prevArrow: <PreviousArrow />, // Use custom prev arrow
        nextArrow: <NextArrow />,     // Use custom next arrow
    };


    return (
        <>
            {/*  NGOs Posts */}
            <div className='about_carousel_container' >
                <Slider {...settings}>
                    {SLIDES.map((slide, index) => (
                        <div key={index} className='content-image'>
                            <img width={1920} height={850} src={slide.src} alt="Image Slider" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="container-fluid">
                <div className="focus_areas">
                    {data?.Ngos?.map((info) => {
                        return (
                            <Link to={`/ngodetails?query=${info?.id}`} className="nav-link">
                                <div className="area" >
                                    <img src={`https://ngo.createdinam.com/public/${info?.logo}`} alt="" className='focus_img' style={{ objectFit: 'cover' }} />
                                    <h3 style={{ textAlign: 'center' }}>{info?.ngo_name}</h3>
                                    <p>{info?.description.slice(0, 175)}...</p>
                                    <div className="flex-wrap-container">
                                        <div className="flex-item">
                                            <a href={`${info?.facebook_link}`} >
                                                <i className="fa-brands fa-square-facebook fa-xl"></i>
                                            </a>
                                        </div>
                                        <div className="flex-item">
                                            <a href={`${info?.instagram_link}`} >
                                                <i className="fa-brands fa-square-instagram fa-xl"></i>
                                            </a>
                                        </div>
                                        <div className="flex-item">
                                            <a href={`${info?.youtube_link}`} >
                                                <i className="fa-brands fa-square-youtube fa-xl"></i>
                                            </a>
                                        </div>
                                        <div className="flex-item">
                                            <a href={`${info?.twitter_link}`} >
                                                <i className="fa-brands fa-square-twitter fa-xl"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
