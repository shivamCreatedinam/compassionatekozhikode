import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import avatar from '../images/userlogo.png';

export const Header = () => {
  // State to control overlay and sidebar visibility
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isUserData, setIsUserData] = useState(null);

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

  const logoutUser = () => {
    sessionStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <header className="site-navbar site-navbar-target bg-secondary shadow" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <Link to="/" className="text-white">
                <img src={logo} alt="" style={{ width: '100px' }} />
              </Link>
            </div>

            <nav className="site-navigation text-left ml-auto" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    style={{ padding: '10px', textDecoration: 'none' }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  {/* <Link to="/ngo_list" className="nav-link">NGO's</Link> */}
                  <NavLink
                    exact
                    to="/ngo_list"
                    activeClassName="active"
                    style={{ padding: '10px', textDecoration: 'none' }}
                  >
                    Observation Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/eventlist"
                    activeClassName="active"
                    style={{ padding: '10px', textDecoration: 'none' }}
                  >
                    Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/blogs"
                    activeClassName="active"
                    style={{ padding: '10px', textDecoration: 'none' }}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    style={{ padding: '10px', textDecoration: 'none' }}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/contact"
                    activeClassName="active"
                    style={{ padding: '10px', textDecoration: 'none' }}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="user-dropdown">
                  <Link to='#' className="nav-link">
                    {isUser === true ? (
                      <img src={avatar} className="user-picture" />
                    ) : (
                      <i className="fa-solid fa-user user fa-xl"></i>
                    )}
                    {userName && <span>{userName}</span>}
                  </Link>
                  {isUser === true ?
                    <div className="dropdown">
                      <p onClick={toggleOverlay}><img src={userImage} className="user-picture" /><span>{isUserData?.user?.name}</span><br /><span>{isUserData?.user?.email}</span></p>
                      <p onClick={logoutUser}>Logout</p>
                    </div> :
                    <div className="dropdown">
                      <p onClick={toggleOverlay}>Surf as a Guest</p>
                      <Link to="/login">Sign Up / Log In</Link>
                      {isUser === true ? <span>{JSON.stringify(isUserData)}</span> : null}
                    </div>}
                </li>
              </ul>
            </nav>


            <div className="ml-auto toggle-button d-inline-block d-lg-none">

              <a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white" >
                <div className="user-dropdown mobile_dropdown">
                  <Link to='#' className="nav-link">
                    {userImage ? (
                      <img src={avatar} className="user-picture" />
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
              <li><Link to="/Events">Event</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
