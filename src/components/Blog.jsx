import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/banner_one.jpg'
import img2 from '../images/banner_two.jpg'
import img3 from '../images/banner_three.jpg'
import img4 from '../images/banner_four.jpg'
import physical from '../images/physical.JPG'
import skill from '../images/skill.JPG'
import yoga from '../images/yoga.JPG'
import creative from '../images/creative.JPG'

const SLIDES = [
    { src: img1, alt: 'Image 1', title: 'In every child’s smile lies the promise of a better world.', button_name: 'Donate', link: 'donate' },
    { src: img2, alt: 'Image 2', title: 'Support. Protect. Empower. Every child matters.', button_name: 'Donate', link: 'donate' },
    { src: img3, alt: 'Image 3', title: 'A safe haven today builds confident leaders for tomorrow.', button_name: 'Donate', link: 'donate' },
    { src: img4, alt: 'Image 4', title: 'Let’s create a world where no child feels forgotten.', button_name: 'Donate', link: 'donate' },
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

export const Blog = () => {

    const eventDate = "2024-12-18T00:00:00";
    const BLOG_APIS = 'https://ngo.createdinam.com/api/blogs';
    const [randomNumber, setRandomNumber] = useState(null);
    const [BlogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data using useEffect hook
    useEffect(() => {
        fetch(BLOG_APIS)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(JSON.stringify(data));
                setBlogData(data?.blogs);
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
        <div>
            <div className='about_carousel_container' >
                <Slider {...settings}>
                    {SLIDES.map((slide, index) => (
                        <div key={index} className='content-image'>
                            <img width={1920} height={850} src={slide.src} alt="Image Slider" />
                            <div className="box-92819">
                                <h1 className="text-white mb-3">{slide.title}</h1>
                                {/* <p><a href="#" className="btn btn-primary py-3 px-4 rounded-0">{slide.button_name}</a></p> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div class="container my-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-12">
                        <div class="row">
                            {BlogData?.map((info, index) =>
                            (
                                <div class="col-md-6 mb-4">
                                    <div class="card mr-3">
                                        <img src={'https://ngo.createdinam.com/public/' + JSON.parse(info?.blog_images)[0]} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{info?.blog_title}</h5>
                                            <p class="card-text">{info?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
