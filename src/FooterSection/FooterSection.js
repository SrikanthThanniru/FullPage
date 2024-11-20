import React from "react";
import "./FooterSection.css"

const FooterSection = ()=>(
    <section className="footer-section">
        <div className="footer-c1">
            <div className="footer-col">
                <h3 className="footer-h3">Product</h3>
                <div className="footer-links">
                    <a className="links" href="overview">overview</a>
                    <a className="links" href="overview">Features</a>
                    <a className="links" href="overview">Solutions</a>
                    <a className="links" href="overview">Tutorials</a>
                    <a className="links" href="overview">Pricings</a>
                </div>
            </div>
            <div className="footer-col">
                <h3 className="footer-h3">Company</h3>
                <div className="footer-links">
                    <a className="links" href="overview">About us</a>
                    <a className="links" href="overview">Careers</a>
                    <a className="links" href="overview">Press</a>
                    <a className="links" href="overview">News</a>
                    <a className="links" href="overview">Media kit</a>
                </div>
            </div>
            <div className="footer-col">
                <h3 className="footer-h3">Resources</h3>
                <div className="footer-links">
                    <a className="links" href="overview">Blog</a>
                    <a className="links" href="overview">Newsletter</a>
                    <a className="links" href="overview">Events</a>
                    <a className="links" href="overview">Help center</a>
                    <a className="links" href="overview">Support</a>
                </div>
            </div>
            <div className="footer-col">
                <h3 className="footer-h3">Use cases</h3>
                <div className="footer-links">
                    <a className="links" href="overview">Startups</a>
                    <a className="links" href="overview">Enterprise</a>
                    <a className="links" href="overview">Government</a>
                    <a className="links" href="overview">SaaS center</a>
                    <a className="links" href="overview">Ecommerce</a>
                </div>
            </div>
            <div className="footer-col">
                <h3 className="footer-h3">Social</h3>
                <div className="footer-links">
                    <a className="links" href="overview">Twitter</a>
                    <a className="links" href="overview">Linkedin</a>
                    <a className="links" href="overview">Facebook</a>
                    <a className="links" href="overview">Github</a>
                    <a className="links" href="overview">Dribble</a>
                </div>
            </div>
        </div>
        <div className="footer-c2">
        <div className="footer-logo-name">
            <img  alt="logo" className="f-logo" src="https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/670469c6a815c532f3e893d9_logomark-bg.svg" />
            <h2 className="footer-logoname">Untitled UI</h2>
        </div>
        <p className="footer-para">© 2077 Untitled UI. All rights reserved.</p>
        </div>
    </section>
)

export default FooterSection