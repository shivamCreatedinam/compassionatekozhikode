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
    const navigate = useNavigate();
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

    // get user details
    const [isUser, setIsUser] = useState(false);
    const [isUserData, setIsUserData] = useState(null);
    const [inputNameValue, setInputNameValue] = useState(isUserData?.user?.name);
    const [inputAddressValue, setInputAddressValue] = useState("");
    const [inputQuantityValue, setInputQuantityValue] = useState("");

    // State to store form data
    const [formData, setFormData] = useState({
        name: isUserData?.user?.name,
        email: isUserData?.user?.email,
        mobile: isUserData?.user?.mobile,
        address: '',
        quantity: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmitDonation = (e) => {
        e.preventDefault();

        if(isUserData === null){
            alert('Please log in to your account to proceed with the donation.');
            navigate("/login");
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${isUserData?.access_token}`); // Ensure Bearer token if needed

        const formdata = new FormData();
        formdata.append("post_id", id); // Ensure `id` is valid
        formdata.append("donation_qty", inputQuantityValue); // Ensure `inputQuantityValue` is valid
        formdata.append("donation_date", new Date().toISOString()); // Format the date to ISO string

        console.log("FormData:", Object.fromEntries(formdata.entries()));


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };


        fetch("https://ngo.createdinam.com/api/donation_from_user", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`); // Handle non-200 responses
                }
                return response.json(); // Parse JSON response
            })
            .then((result) => {
                console.log("API Response:", result); // Log the result
                if (result?.success === true) {
                    alert(result?.message);
                    window.location.reload();
                } else {
                    alert(result?.message);
                }
            })
            .catch((error) => {
                console.error("Fetch Error:", error.message); // Log the error message
            });

    };

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

    // Fetch data using useEffect hook
    useEffect(() => {
        getLoginuserDetails();
    }, []);

    const getLoginuserDetails = () => {
        const savedUser = sessionStorage.getItem("user");
        if (JSON.parse(savedUser)?.success === true) {
            setIsUserData(JSON.parse(savedUser));
            setIsUser(true);
        } else {
            setIsUserData(null);
            setIsUser(false);
            console.log('LoginuserDetailsX', savedUser);
        }
    }


    // Handle the input change
    const handleNameChange = (event) => {
        setInputNameValue(event.target.value); // Update the state with the new value
    };

    // Handle the input change
    const handleAddressChange = (event) => {
        setInputAddressValue(event.target.value); // Update the state with the new value
    };

    // Handle the input change
    const handleQuantityChange = (event) => {
        setInputQuantityValue(event.target.value); // Update the state with the new value
    };

    // Function to calculate percentage
    const calculatePercentage = (achieved, target) => {
        if (target === 0) {
            return 0; // Avoid division by zero
        }
        const percentage = (achieved / target) * 100;
        return percentage.toFixed(0); // Returns percentage up to 2 decimal places
    };

    // backdrop-filter:blur(8px) saturate(150%)
    return (
        <>
            {loading === true ? <p>loading...</p> :
                <>
                    <div className="event_hero" style={{ backgroundImage: `url(${'https://ngo.createdinam.com/public/' + JSON.parse(data?.post_banner_images)[0]})` }}>
                    </div>
                    <div className="ngo-post">
                        <div className="post-left">
                            <div className="col-md-12 left_content">
                                <h2 class="post_name">{data?.post_title}</h2>
                                <div class="line"></div>
                                <h3>{data?.post_desc}</h3>
                                <h5>{data?.ngo?.email}</h5>
                                <h5>{data?.ngo?.contact_number}</h5>
                                <h5>{data?.ngo?.address}</h5>
                            </div>
                        </div>
                        <div className="post-right">
                            <div className="col-md-6 right_content">
                                <div className="event-29191 mb-5">
                                    <div style={styles.container}>
                                        <h2>Contact Form</h2>
                                        <form onSubmit={handleSubmitDonation} style={styles.form}>
                                            <div style={styles.formGroup}>
                                                <label>Name:</label>
                                                <input
                                                    type="text"
                                                    defaultValue={isUserData?.user?.name}
                                                    required
                                                    style={styles.input}
                                                />
                                            </div>
                                            <div style={styles.formGroup}>
                                                <label>Email: </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    defaultValue={isUserData?.user?.email}
                                                    required
                                                    style={styles.input}
                                                />
                                            </div>
                                            <div style={styles.formGroup}>
                                                <label>Mobile:</label>
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    defaultValue={isUserData?.user?.mobile_number}
                                                    required
                                                    style={styles.input}
                                                />
                                            </div>
                                            <div style={styles.formGroup}>
                                                <label>Address:</label>
                                                <input
                                                    name="address"
                                                    value={inputAddressValue}
                                                    onChange={handleAddressChange}
                                                    required
                                                    style={styles.textarea}
                                                ></input>
                                            </div>
                                            <div style={styles.formGroup}>
                                                <label>Quantity:</label>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    value={inputQuantityValue}
                                                    onChange={handleQuantityChange}
                                                    required
                                                    style={styles.input}
                                                />
                                            </div>
                                            <button type="submit" style={styles.button}>
                                                Submit Donation
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div class="card-6-inner">
                                    <p>Target Achieved {calculatePercentage(Number(data?.donation_qty_received), Number(data?.donation_qty))}%</p>
                                    <progress id="progress-bar-1" value={calculatePercentage(Number(data?.donation_qty_received), Number(data?.donation_qty))} max="100"> </progress>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="title">
                            <h1>WHAT IS TheHumanTouch ?</h1>
                            <p>The Human Touch is a compassionate organization dedicated to transforming the lives of children in observation homes. With a mission to provide care, protection, and empowerment, we work tirelessly to ensure that every child has the opportunity to grow, thrive, and envision a brighter future.</p>
                        </div>
                        <br />
                    </div>
                </>}
        </>
    )
}

// CSS-in-JS styles
const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '80px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};
