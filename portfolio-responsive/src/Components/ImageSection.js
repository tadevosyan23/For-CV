import React from "react";
import about from "../img/about.gif";
import cv from "../documents/cv.pdf";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <p className="about-text">
                    I really want to reach heights in programming.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Razmik Tadevosyan</p>
                        <p>: 22</p>
                        <p>: Armenian</p>
                        <p>: Armenian, Russian, English</p>
                        <p>: Armenia, Kotayq, Abovyan</p>
                    </div>
                </div>
                <a href={cv} download className="btn">
                    Download Cv
                </a>
            </div>
        </div>
    );
}

export default ImageSection;
