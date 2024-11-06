import React, {useState, useEffect } from 'react'
import banner1 from '../images/banner_1.JPG'
import banner2 from '../images/banner_2.JPG'
import banner3 from '../images/banner_3.JPG'
import banner4 from '../images/banner_4.JPG'
import banner5 from '../images/banner_5.JPG'
import person_1 from '../images/img_1.jpg'
export const Posts = () => {

// for first carousel

const [value, setValue] = useState(0); // State to track current slide
const [start, setStart] = useState(null); // State to track interval for auto sliding
const trailValues = [0, 20, 40, 60, 80];
const intervalDuration = 4000; // 4 seconds for auto slide

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






    return (
        <>

            {/*  carousel starts here */}
            <div className="carousel_container">
            <div
                className="slider"
                style={{ transform: `translateX(-${value}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Slides */}
                <div className="box1 box" style={{backgroundImage: `url(${banner1})`}}>
                    <div className="bg"></div>
                    <div className="details">
                        <h1>Title 1</h1>
                        <p>This is the description of 1st Slider...</p>
                        <button type="button">Check Now</button>
                    </div>
                </div>
                <div className="box2 box" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="bg"></div>
                    <div className="details">
                        <h1>Title 2</h1>
                        <p>This is the description of 2nd Slider...</p>
                        <button>Check Now</button>
                    </div>
                </div>
                <div className="box3 box" style={{backgroundImage: `url(${banner3})`}}>
                    <div className="bg"></div>
                    <div className="details">
                        <h1>Title 3</h1>
                        <p>This is the description of 3rd Slider...</p>
                        <button>Check Now</button>
                    </div>
                </div>
                <div className="box4 box" style={{backgroundImage: `url(${banner4})`}}>
                    <div className="bg"></div>
                    <div className="details">
                        <h1>Title 4</h1>
                        <p>This is the description of 4th Slider...</p>
                        <button>Check Now</button>
                    </div>
                </div>
                <div className="box5 box" style={{backgroundImage: `url(${banner5})`}}>
                    <div className="bg"></div>
                    <div className="details">
                        <h1>Title 5</h1>
                        <p>This is the description of 5th Slider...</p>
                        <button>Check Now</button>
                    </div>
                </div>
            </div>

            {/* Next/Previous Buttons */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="prev"
                width="56.898"
                height="91"
                viewBox="0 0 56.898 91"
                onClick={() => handleButtonClick('decrease')}
            >
                <path
                    d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
                    transform="translate(0 91) rotate(-90)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="next"
                width="56.898"
                height="91"
                viewBox="0 0 56.898 91"
                onClick={() => handleButtonClick('increase')}
            >
                <path
                    d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
                    transform="translate(56.898) rotate(90)"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                />
            </svg>

            {/* Trail (Dots) */}
            <div className="trail">
                {trailValues.map((_, index) => (
                    <div
                        key={index}
                        className={`box${index + 1} ${value === trailValues[index] ? 'active' : ''}`}
                        onClick={() => clickCheck(index)}
                    ></div>
                ))}
            </div>
        </div>

            {/*  carousel ends here */}

            {/*  NGOs Posts */}
            <div className="ngo-post">
                <div className="post-left">
                    <h2 className="post_name">Name of the Post or the NGOs which is organizing the Event</h2>      {/* <div className="line"></div> */}
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae porro ratione saepe dolor quas ducimus odio quasi laborum accusantium, non deleniti officia voluptas veritatis eaque totam nostrum excepturi minima suscipit doloremque recusandae? Similique, maxime odio? Explicabo laudantium, maxime sapiente eligendi eveniet atque aut doloremque, illo praesentium at obcaecati odit!</h3>

                </div>
                <div className="post-right">
                    <div className="col-md-6 right_content">
                        <div className="event-29191 mb-5">
                            <a href="#" className="d-block mb-3"><img src={person_1} alt="Image" className="img-fluid rounded" /></a>
                            <div className="px-3 d-flex">

                                <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date ">
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

            {/*  progress bar  */}

            <div className="progress_container">
                <div className="title">
                    <h1>How we are Doing?</h1>
                    <p>The Progress we have made with generous support of Kind people.</p>
                </div>
                <p>We have acheived 70% of the Goal...</p>

                <div className="progress">
                    <div className="bar shadow leaf"></div>
                </div>
            </div>

            {/* Amazon Products  */}
            <div className="amazon-section">
                <h1 className="products_heading">What You can do to contribute,  <br /> cause every small support makes a big change</h1>

                <div className="products_section">
                    <div className="product_wrapper">
                        <img className="product_img" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2777/posts/29421/image-upload/Branding_Mockup_Scene.jpg" alt="" />
                        <div className="product_desc">
                            <h3>Product 1</h3>
                            <p>about it </p>
                            <p>$ 0.00</p>
                            <button className="custom-btn btn-7 donate-btn"><span>Donate</span></button>
                        </div>
                    </div>
                    <div className="product_wrapper">
                        <img className="product_img" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2777/posts/29421/image-upload/Branding_Mockup_Scene.jpg" alt="" />
                        <div className="product_desc">
                            <h3>Product 1</h3>
                            <p>about it </p>
                            <p>$ 0.00</p>
                            <button className="custom-btn btn-7 donate-btn"><span>Donate</span></button>
                        </div>
                    </div>
                    <div className="product_wrapper">
                        <img className="product_img" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2777/posts/29421/image-upload/Branding_Mockup_Scene.jpg" alt="" />
                        <div className="product_desc">
                            <h3>Product 1</h3>
                            <p>about it </p>
                            <p>$ 0.00</p>
                            <button className="custom-btn btn-7 donate-btn"><span>Donate</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
