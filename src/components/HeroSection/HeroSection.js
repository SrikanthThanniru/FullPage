// src/components/HeroSection.jsx
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";


import './HeroSection.css';

const HeroSection = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
        <div className="badge-group">
            <div className="badge">
            <p className="badge-p">New feature</p>
            </div>
            <div className="content">
            <p className="content-p">Check out the dashboard</p>
            <IoIosArrowRoundForward />
            </div>
        </div>
        <h1 className="heading">Beautiful analytics to grow smarter</h1>
        <p className="para">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      <div className="buttons">
        <button className="button1">
        <FaRegCirclePlay />
        <p>Demo</p>
        </button>
        <button className="button2">SignUp</button>
      </div>
    </div>
    <div className="hero-img">
    <img  className="heroimage" alt="heroimage" src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SR~9DeM3vhGlHKTXqXxCLv7xU~J9DMhzVlb9nhLAkmmQdHwgtmcnRzEqg7WwXFOcNtIvLiBTjRYjoGT7uQXK8AHbUTzZpx42v~ozCdmt7qHZj1lKKSIKoa6gPKqfUXn-o8KOTZ-fDnMdb-cjkgkWKG6DX9M-CRhMCFB2zIiKHR~1WTRiLVdrM43n8tKebyUMUtIc3quxvOQoYDRo4I4IuTBNY18XSQpng4IChSOb~38dEboVgA71IqMYd4KHCFzjhwVnCJEi2stv55O5ehPHzMyTg~BqZ~vrqibehhAcYl1iqiSDCYUR1Y4bNLhOfShsTULsjiFZfSHq-e2PVn93hQ__"  />
    </div>
  </section>
);

export default HeroSection;
