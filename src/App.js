// src/App.jsx
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import SocialSection from "./components/SocialSection/SocialSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import TestmonialSection from "./components/TestmonialSection/TestmonialSection";
import ExtraSection from "./components/ExtraSection/ExtraSection";
import FaqSection from "./components/FaqSection/FaqSection";
import BlogSection from "./components/BlogSection/BlogSection";
import CtSection from "./components/CtSection/CtSection";
import FooterSection from "./FooterSection/FooterSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SocialSection/>
      <FeatureSection/>
      <TestmonialSection/>
      <ExtraSection/>
      <FaqSection/>
      <BlogSection/>
      <CtSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
