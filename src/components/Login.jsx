import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();
    // State to toggle between login and register forms
    const [isActive, setIsActive] = useState(false);
    // State to hold the input value
    const [inputEmailValue, setInputEmailValue] = useState("");
    const [inputPassValue, setInputPassValue] = useState("");
    // register
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputRemailValue, setInputRemailValue] = useState("");
    const [inputMobileValue, setInputMobileValue] = useState("");
    const [inputRpassValue, setInputRPassValue] = useState("");


    // Handlers for toggling between login and register
    const handleSignUpClick = () => {
        setIsActive(true); // Show the register form
    };

    const handleSignInClick = () => {
        setIsActive(false); // Show the login form
    };

    // Handle the input change
    const handleEmailChange = (event) => {
        setInputEmailValue(event.target.value); // Update the state with the new value
    };

    // Handle the input change
    const handlePassChange = (event) => {
        setInputPassValue(event.target.value); // Update the state with the new value
    };

    // Handle the input change
    const handleNameChange = (event) => {
        setInputNameValue(event.target.value); // Update the state with the new value
    };
    // Handle the input change
    const handleRemailChange = (event) => {
        setInputRemailValue(event.target.value); // Update the state with the new value
    };
    // Handle the input change
    const handleMobileChange = (event) => {
        setInputMobileValue(event.target.value); // Update the state with the new value
    };
    // Handle the input change
    const handleRpassChange = (event) => {
        setInputRPassValue(event.target.value); // Update the state with the new value
    };

    // Handle form submission or display the input value
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formdata = new FormData();
        formdata.append("email", inputEmailValue);
        formdata.append("password", inputPassValue);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch("https://ngo.createdinam.com/api/login", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result?.success === true){
                    sessionStorage.setItem("user",JSON.stringify(result));
                    navigate("/");
                    window.location.reload();
                }else{
                    alert(JSON.stringify(result))
                }
            })
            .catch((error) => alert(error));
    };

    // Handle form submission or display the input value
    const handleRegisterSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formdata = new FormData();
        formdata.append("name", inputNameValue);
        formdata.append("email", inputRemailValue);
        formdata.append("mobile_number", inputMobileValue);
        formdata.append("password", inputRpassValue);
        formdata.append("password_confirmation", inputRpassValue);
        formdata.append("role", 'user');

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch("https://ngo.createdinam.com/api/register", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                alert(JSON.stringify(result));
                setIsActive(false); 
                navigate("/");
                window.location.reload();
            })
            .catch((error) => alert(error));
    };

    return (
        <>
            <div className={`form_container ${isActive ? 'active' : ''}`}>
                <div className="curved-shape"></div>
                <div className="curved-shape2"></div>

                {/* Login Form */}
                <div className="form-box login">
                    <h2 className="animation" style={{ '--D': 0 }}>Login</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="input-box animation" style={{ '--D': 1 }}>
                            <input type="text" required value={inputEmailValue} onChange={handleEmailChange} />
                            <label>Username</label>
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="input-box animation" style={{ '--D': 2 }}>
                            <input type="text" required value={inputPassValue} onChange={handlePassChange} />
                            <label>Password</label>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <div className="input-box animation" style={{ '--D': 3 }}>
                            <button className="btn" type="submit">Login</button>
                        </div>
                        <div className="register-link animation" style={{ '--D': 4 }}>
                            <p>Don't have an account? <a href="#" className="SignUpLink" onClick={handleSignUpClick}>Sign up</a></p>
                        </div>
                    </form>
                </div>

                {/* Info Section for Login */}
                <div className="info-content login">
                    <h2 className="animation" style={{ '--D': 0 }}>Welcome Back!</h2>
                    <p className="animation" style={{ '--D': 1 }}>Hi User, Please log in to get started...</p>
                </div>

                {/* Register Form */}
                <div className="form-box register">
                    <h2 className="animation" style={{ '--li': 17 }}>Sign Up</h2>
                    <form onSubmit={handleRegisterSubmit} >
                        <div className="input-box animation" style={{ '--li': 18 }}>
                            <input type="text" required value={inputNameValue} onChange={handleNameChange} />
                            <label>Name</label>
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19 }}>
                            <input type="text" required value={inputRemailValue} onChange={handleRemailChange} />
                            <label>Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19 }}>
                            <input type="text" required value={inputMobileValue} onChange={handleMobileChange} />
                            <label>Mobile No.</label>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19 }}>
                            <input type="text" required value={inputRpassValue} onChange={handleRpassChange} />
                            <label>Password</label>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 20 }}>
                            <button className="btn" type="submit">Sign Up</button>
                        </div>
                        <div className="register-link animation" style={{ '--li': 21 }}>
                            <p>Already have an account? <a href="#" className="SignInLink" onClick={handleSignInClick}>Sign In</a></p>
                        </div>
                    </form>
                </div>

                {/* Info Section for Register */}
                <div className="info-content register">
                    <h2 className="animation" style={{ '--li': 17 }}>Welcome!</h2>
                    <p className="animation" style={{ '--li': 18 }}>Hi User, Please Create an account to get started...</p>
                </div>
            </div>
        </>
    );
};
