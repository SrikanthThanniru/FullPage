import React from "react";
import FaqContent from "../FaqContent/FaqContent";
import "./FaqSection.css";

const FaqSection = () => (
    <section className="faq-section">
        <div className="faq-c1">
            <h2 className="faq-heading">Frequently asked questions</h2>
            <p className="faq-para">Everything you need to know about the product and billing.</p>
        </div>
        <FaqContent />
        <div className="faq-c3">
            <div className="avatar-group">
                <div className="faq-img">
                    <img className="faq-img2" alt="img1" src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLauCRybBCEQFoNwLwmiTad1T~QAh3W4BFWiskYz9h2aLVGfRr0A77nXkj0UMFEqtMl1zb60PUqvEKdjHlaxlaZAHWUErKAGP8QuauVbbk4uk~13K4BxDZA8pvC41J95WPMcdmgzbtbTXLFpM7pjUB7pt2DqmuahxmJVLFMnOOKrc~tVcstFC1KzmM-EMmoD168jBC56BAQX~FvmSS5uHb78UIHeqCUkD2Hf-hh-NFLbYMJPrQoa6vKEwNrqpDpuFfgRjRlXAKi1~wPeyfpHRwqCn8BJoWCZVnth0p4EF2-~GriOraWhnf6DBVpEFUBynjvU9V6JEAorPRheZ7351w__" />
                </div>
                <div className="faq-img">
                    <img className="faq-img1" alt="img1" src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nj1dhHJvIwqKXhqEFQBNONRc113LfBUCy-0oGmZDlV-0qwv3paPWz0AhVnQlAh8n743SJAQqGwNLiwvqu3NiQ9~~dKI4SWiBp2mbdzu24CDTSpWbMk0FEEt0uVMuvErbYlh9Pde79A8RnQNPX3caI61XMQJCUadFzsB~ttGXFaOo0p7ClgWKFwmgcfU3E-J3ndwBSnXjNCJTlD5Hv6HQgE-sC1MBhgTzwj8iPj9R7JWd7W~rQS-7fZMnnSDxZTlNSk1Fqgsui~tlkGHx0rgj2wZJbBmDpjWc89e8iiNE7MBk9Pvs6p2WxGu61oX4SNdJPXybNcQ109-58cGnbCDhxA__" />
                </div>
                <div className="faq-img">
                    <img className="faq-img3" alt="img1" src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L3BxbJ4qZcpFGuofUtxaqy6jhwCFJi-fEveMWznXTsMIEv~cyo14pmdwtoJB9kz58feAGo2I1R84izMTlnqRrcs1aEv6JQOyvQAke0ZXA9Co5FF2rYh0dNBymmmgOuyZ1XCLeaPUlGEHusrCENCUct~8z7YQFkI9G-ZLTkv~F9B3vdFhTaIBMZ8IGqR1co~KuP~nWsn~kYsP-LLTzWs~tGsHUhCkI66~BxyPCUQk3sAxV4hCbk21V2PzWhreAsdFlZ21s0YGWyBCmpoMENAzqWkSigGHY6HY0cgVmfvSQ0WhDgszlKnAzd8~37hE7KZIcPwXrJlYhWDLJGEv8HhG2A__" />
                </div>

            </div>
            <div className="faq-h1-p">
                <h2 className="faq-h2">Still have questions?</h2>
                <p className="faq-para">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>

            </div>
            <button className="faq-button">Get in touch</button>

        </div>

    </section>
)

export default FaqSection