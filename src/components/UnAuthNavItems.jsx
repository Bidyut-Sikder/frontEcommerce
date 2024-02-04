


import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";

const UnAuthNavItems = () => {
    const { user, logout } = useContext(AuthContext)

    console.log(user)

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


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

                        <Link to="/login">Log out</Link>
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
                            </div>
                            {/* sign in and log in area */}



                            {user.photoURL && <img src={user.photoURL} style={{ width: '40px', height: '40px', borderRadius: '20px', marginRight: '10px' }} alt="user" />}
                            {/* <img src={user.imgURL} alt="" /> */}

                            <button onClick={() => logout()} className="btn lab-btn">Log Out</button>
                            {/* menu toggle area */}


                            {/* social toggle area */}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};











export default UnAuthNavItems;