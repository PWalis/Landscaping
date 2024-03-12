import "../../../index.css";
import galleryPic1 from "../../../assets/after-pic.jpg";
import galleryPic2 from "../../../assets/sedona_1b.jpg";
import galleryPic3 from "../../../assets/home-page-image.jpg";

import React, { useState } from 'react';

const GalleryContent: React.FC = () => {
    const images = [galleryPic2, galleryPic3, galleryPic1]; // Add your image sources
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const width = screen.width


    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="gallery-content overflow-hidden">
            <div className="full-screen-container">
                <img className="full-screen-image" src={images[currentImageIndex]} alt="" />
            </div>
            <button onClick={handlePrevClick} className="mobile-arrow mobile-arrow-left sm:arrow sm:left-arrow hover:opacity-70 transition duration-300">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button onClick={handleNextClick} className="mobile-arrow mobile-arrow-right sm:arrow sm:right-arrow hover:opacity-70 transition duration-300">
                <span></span>
                <span></span>
                <span></span>
            </button> 
            
        </div>
    );
};
export default GalleryContent;
