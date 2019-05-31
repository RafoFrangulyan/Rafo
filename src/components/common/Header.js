import React from 'react';
import logo from './logo.png'
import './Header.css';
const Header = () => {
    return (
        <div className='Header'>
            <img className='Header-logo' alt='Logo' src={logo}></img>
        </div>
    );
};
export default Header;