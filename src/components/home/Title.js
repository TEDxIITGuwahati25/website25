import React, { useEffect, useState } from 'react';
import './title.css';

const Title = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate scale and opacity for the popup image
    const calculateOpacityAndScale = () => {
        const start = 100; // Start showing image
        const end = 300; // Fully visible by this point
        const progress = Math.min(Math.max((offset - start) / (end - start), 0), 1); // Clamped between 0 and 1

        return {
            opacity: progress,
            transform: `scale(${0.5 + progress * 0.5})`, // Scale from 0.5 to 1
        };
    };

    return (
        <div>
            <div className="parallax_container">
                <span
                    className="seaside"
                    style={{ transform: `translateX(${-offset * 2}px)` }}
                >
                    <img src="/images/home/Seaside.png" alt="Seaside" />
                </span>
                <span
                    className="citadel"
                    style={{ transform: `translateX(${offset * 2}px)` }}
                >
                    <img src="/images/home/Citadel.png" alt="Citadel" />
                </span>
                <div
                    className="popup_image_container"
                    style={calculateOpacityAndScale()}
                >
                    <img src="/images/home/logo.png" alt="New Popup" />
                </div>
            </div>
            <div className="content">
                {/* Placeholder content */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt...
            </div>
        </div>
    );
};

export default Title;
