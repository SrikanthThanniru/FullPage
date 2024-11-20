// src/components/Navbar.jsx
import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { IoIosArrowDown } from "react-icons/io";

import './NavBar.css';

const NavBar = () => (
    <nav className="nav-container">
        <div className="container1">
            <div className="main-heading">
                <h1>Untitled UI</h1>
            </div>
            <div className="sub-headings">
                <a href="#home">Home</a>
                <div className="items">
                    <a href="#produts">Products</a>
                    <IoIosArrowDown className="icon" />
                </div>
                <div className="items">
                    <a href="#produts">Resources</a>
                    <IoIosArrowDown className="icon" />
                </div>
                <div>
                    <a href="#produts">Pricing</a>
                </div>
            </div>

        </div>
        <div className="container2">
            <div className="logo">
                <img  className="logoImg" alt="allen"src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-Rvo9KTT9peDF34ZjXAFsCmViEPt6~ShOTlYZ2aVIlOzuaUQUjatnqmAomM2wTrCV6Q-~9AROnL25BQTq4oBgfpq7lVckGxk1Pmh7Urp3FZ2i9f5HAJ8mbhk~VTC~hj~EQd8pN~9fLaTnjLQWQEUjA0BbC0soI2aP5e0sSquvyVYsdTMdKtCuxYiPT7q3ofDmLNy2t1NpGonxllTQiOvrzTUkidzzbJyYV6Zh6HsgesUl~63jNabEb6sVJK5299p5hbkmo0PRBctmVQrq3cyQLH1HbniWfP55TiraL3KqIYf5P~fnTqF-CPQpdvTcmTdMFDuXXjQqkEScX3HXqHHg__"/>
            </div>
            <div className="dropdown">

            <BurgerMenu/>
            </div>

        </div>
    </nav>
);

export default NavBar;
