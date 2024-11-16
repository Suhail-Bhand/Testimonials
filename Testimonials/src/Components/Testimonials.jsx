import React, { useState } from 'react';
import './style.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "This product is a true masterpiece of innovation!",
            author: "Alice Cooper",
        },
        {
            quote: "I can’t imagine my life without this now.",
            author: "Mark Robinson",
        },
        {
            quote: "Superb quality, worth every penny!",
            author: "Linda Carter",
        },
        {
            quote: "The customer support team was incredibly helpful.",
            author: "James Taylor",
        },
        {
            quote: "This product has exceeded all my expectations.",
            author: "Sophia Turner",
        },
        {
            quote: "I’ve recommended it to all my friends and family!",
            author: "Henry Wilson",
        },
        {
            quote: "An absolute essential for anyone in this field.",
            author: "Ella Walker",
        },
        {
            quote: "It’s rare to find a product this well-crafted.",
            author: "Nathan Scott",
        },
        {
            quote: "The results are simply amazing. Highly satisfied!",
            author: "Grace Harris",
        },
        {
            quote: "A perfect blend of functionality and design.",
            author: "Daniel Moore",
        },
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="testimonials">
            {/* Display Current Index */}
            <div className="testimonials-index">
                Testimonial {currentIndex + 1} of {testimonials.length}
            </div>

            {/* Display Current Quote */}
            <div className="testimonials-quote">
                {testimonials[currentIndex].quote}
            </div>

            <div className="testimonials-author">
                - {testimonials[currentIndex].author}
            </div>

            {/* Navigation Buttons */}
            <div className="testimonials-nav">
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentIndex === testimonials.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
