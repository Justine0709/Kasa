import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='Header'>
            <img className="Logo" src="Logo.png" alt ="logo kasa"></img>
            <Navigation/>
        </div>
    );
};

export default Header;