import React, {  useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {

  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  
  const [home, setHome] = useState(true)
  const [shop, setShop] = useState(false)
  const [blog, setBlog] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)





  const shopSetting = () => {
    setAbout(false)
    setBlog(false)
    setContact(false)
    setShop(true)
    setHome(false)
  }

  const homeSetting = () => {
    setAbout(false)
    setBlog(false)
    setContact(false)
    setShop(false)
    setHome(true)
  }


  const blogSetting = () => {
    setAbout(false)
    setBlog(true)
    setContact(false)
    setShop(false)
    setHome(false)
  }
  const contactSetting = () => {
    setAbout(false)
    setBlog(false)
    setContact(true)
    setShop(false)
    setHome(false)
  }
  const aboutSetting = () => {
    setAbout(true)
    setBlog(false)
    setContact(false)
    setShop(false)
    setHome(false)
  }




  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });






  return (
    <header
      className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""
        }`}
    >





      {/* header top starts here */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">


            <div className="header-top-area">
              <Link to="signup" className="lab-btn me-3">
                <span>Create Account</span>
              </Link>
              <Link to="/login">Log in</Link>
            </div>
         

        </div>
      </div>
      {/* header top ends here */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo area starts here */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu area */}


                     <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link onClick={homeSetting} className={home ? "active-link" : ''} to="/">Home</Link>
                  </li>
                  <li>
                    <Link onClick={shopSetting} className={shop ? "active-link" : ''} to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link onClick={blogSetting} className={blog ? "active-link" : ''} to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link onClick={aboutSetting} className={about ? "active-link" : ''} to="/about">About</Link>
                  </li>
                  <li>
                    <Link onClick={contactSetting} className={contact ? "active-link" : ''} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

{/*             <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div> */}
              {/* sign in and log in area */}

           

              
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Log In
              </Link>
              {/* menu toggle area */}

              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggle area */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
