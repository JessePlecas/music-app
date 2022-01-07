import React from 'react';
import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="navbar">
            <Link to="/" className="item">
                <img className="logo" src={Logo} alt="logo" />
            </Link>

            <div className="menu">
                <Link to="/streams/discover" className="item-discover">
                    Discover
                </Link>
                <Link to="/streams/join" className="item-join">
                    Join
                </Link>

                <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;