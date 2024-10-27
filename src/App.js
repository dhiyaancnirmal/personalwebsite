import React from 'react';
import './index.css';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import BusinessCard from './BusinessCard';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <BusinessCard />
            <div className="flex space-x-5 mt-10">
                <a href="https://www.linkedin.com/in/dhiyaan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-600 text-3xl hover:text-black" />
                </a>
                <a href="https://x.com/dh1yaan" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-gray-600 text-3xl hover:text-black" />
                </a>
                <a href="mailto:nirmaldhiyaan@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-gray-600 text-3xl hover:text-black" />
                </a>
            </div>
        </div>
    );
}

export default App;
