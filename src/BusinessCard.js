// src/BusinessCard.js
import React from 'react';
import './BusinessCard.css';

function BusinessCard() {
    return (
        <div className="center-box rotate-effect">
            <img src="background.jpeg" alt="Background" className="background-image" />
            <div className="overlay-text">
                <h2 className="centered-text font-[Serpentine]">DHIYAAN NIRMAL</h2>
            </div>
        </div>
    );
}

export default BusinessCard;
