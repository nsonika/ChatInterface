import React from 'react';
import nucleus from '../../assets/nucleus.jpg';

const Navbar = () => {
    return (
        <div className="flex items-center p-4 text-black">
            <img src={nucleus} alt="Nucleus AI Logo" className="h-10 mr-4" />
            <h1>Nucleus AI Chat</h1>
        </div>
    );
};

export default Navbar;
