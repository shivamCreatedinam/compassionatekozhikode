import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export const Header = () => {
  // State to control overlay and sidebar visibility
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle overlay visibility
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(null);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <header className="site-navbar site-navbar-target bg-secondary shadow" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <Link to="/" className="text-white">
                <img src={logo} alt="" style={{ width: '100px' }} />
                <span>Compassion atekozhikode</span>
              </Link>
            </div>

            <nav className="site-navigation text-left ml-auto" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li className="active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
                <li>
                  <Link to="#" className="nav-link">Our Causes</Link>
                </li>
                <li>
                  <Link to="blogs" className="nav-link">Blog</Link>
                </li>
                <li>
                  <Link to="contact" className="nav-link">Contact</Link>
                </li>
                <li className="user-dropdown">
                  <Link to='#' className="nav-link">
                    {userImage ? (
                      <img src={userImage} alt="User Profile" className="user-picture" />
                    ) : (
                      <i className="fa-solid fa-user user fa-xl"></i>
                    )}
                    {userName && <span>{userName}</span>}
                  </Link>
                  <div className="dropdown">
                    <p onClick={toggleOverlay}>Surf as a Guest</p>
                    <Link to="/login">Sign Up / Log In</Link>
                  </div>
                </li>
              </ul>
            </nav>


            <div className="ml-auto toggle-button d-inline-block d-lg-none">

              <a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white" >
                <div className="user-dropdown mobile_dropdown">
                  <Link to='#' className="nav-link">
                  {userImage ? (
                      <img src={userImage} alt="User Profile" className="user-picture" />
                    ) : (
                      <i className="fa-solid fa-user user fa-xl"></i>
                    )}
                    {userName && <span>{userName}</span>}
                  </Link>
                  <div className="dropdown">
                    <p onClick={toggleOverlay}>Surf as a Guest</p>
                    <Link to="/login">Sign Up / Log In</Link>
                  </div>
                </div>
                <span className="icon-menu h3 text-white"> <i className="fa-solid fa-bars" onClick={toggleSidebar}></i></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar and Overlay */}
      {showSidebar && (
        <div className="sidebar-overlay" onClick={toggleSidebar}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className='sidebar-header'>
              <h3>Menu</h3>
              <i className="fa-solid fa-x fa-xl" onClick={toggleSidebar}></i>
            </div>
            <ul className="sidebar-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#">Our Causes</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Overlay for Guest */}
      {showOverlay && (
        <div className="popup-overlay" id="popupOverlay">
        <div className="popup-form">
          <div className="form_top">
            <h3>Enter Guest Details</h3>
            <i className="fa-solid fa-x fa-xl" onClick={toggleOverlay}></i>
          </div>
          <form id="guestForm" onSubmit={toggleOverlay}>
            <div className="form-group">
              <label htmlFor="guestNameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="guestNameInput"
                placeholder="Enter your name"
                value={userName}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guestImageInput">Profile Picture</label>
              <input
                type="file"
                className="form-control"
                id="guestImageInput"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};
