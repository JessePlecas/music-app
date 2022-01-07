import React from 'react';
import { Link } from 'react-router-dom';

const StreamDiscover = () => {
    return (
        <div className="discover">
            <h1 className="title-discover">Discover new music</h1>
            <Link to="/streams/join" className="join-btn-discover">
                    Join Now
            </Link>
            <div className="covers"></div>
            <p className="sub-title-discover">Join today and discover new album releases in just one click.</p>
            
        </div>
        );
};

export default StreamDiscover;