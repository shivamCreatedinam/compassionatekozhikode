import React, { useState } from 'react';

export const Login = () => {
    // State to toggle between login and register forms
    const [isActive, setIsActive] = useState(false);

    // Handlers for toggling between login and register
    const handleSignUpClick = () => {
        setIsActive(true); // Show the register form
    };

    const handleSignInClick = () => {
        setIsActive(false); // Show the login form
    };

    return (
        <>
            <div className={`form_container ${isActive ? 'active' : ''}`}>
                <div className="curved-shape"></div>
                <div className="curved-shape2"></div>

                {/* Login Form */}
                <div className="form-box login">
                    <h2 className="animation" style={{ '--D': 0 }}>Login</h2>
                    <form action="#">
                        <div className="input-box animation" style={{ '--D': 1 }}>
                            <input type="text" required />
                            <label>Username</label>
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="input-box animation" style={{ '--D': 2 }}>
                            <input type="password" required />
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
                    <form action="#">
                        <div className="input-box animation" style={{ '--li': 18 }}>
                            <input type="text" required />
                            <label>Name</label>
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19 }}>
                            <input type="email" required />
                            <label>Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19 }}>
                            <input type="text" required />
                            <label>Mobile No.</label>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19 }}>
                            <input type="password" required />
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
