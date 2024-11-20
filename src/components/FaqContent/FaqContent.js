import React, { useState } from "react";
import "./FaqContent.css";

const FaqContent = () => {
    const faqData = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer:
                "Yes, You have the access to change the plan",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "After 30-days free trial",
        },
        {
            question: "Can other info be added to an invoice?",
            answer:
                "Yes, we can",
        },
        {
            question: "How does billing work?",
            answer:
                "Fair and online way.",
        },
        {
            question: "How do I change my account email?",
            answer:
                "Yes, go to the mail and re-enter the mail account.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="faq-container">
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    >
                        <div
                            className="faq-question"
                            onClick={() => toggleFaq(index)}
                        >
                            {item.question}
                            <span className="faq-icon">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqContent;
