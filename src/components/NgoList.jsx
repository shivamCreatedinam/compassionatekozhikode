import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/banner_1.JPG'
import banner2 from '../images/banner_2.JPG'
import banner3 from '../images/banner_3.JPG'
import banner4 from '../images/banner_4.JPG'
import banner5 from '../images/banner_5.JPG'
import person_1 from '../images/img_1.jpg'
import product1 from '../images/61dcXwvdaGL._SX679_.jpg'
import product2 from '../images/81YOl3qrG5L._SX679_.jpg'
import product3 from '../images/81dKUtgqzuL._SX679_.jpg'
import banner from '../images/banner_1.JPG';
import img1 from '../images/about_us_1.jpeg';
import banner_2 from '../images/banner_1.JPG'

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


    return (
        <>
            {/*  NGOs Posts */}
            <div className="event_hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero_top">

                </div>
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
