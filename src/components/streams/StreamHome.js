import React from 'react';
import { Link } from 'react-router-dom';

const StreamHome = () => {
    return (
    <div className="home">
        <h1 className="title">Feel The Music</h1>
        <p className="sub-title">Stream over twenty thousand songs with one click.</p>
        <div className="image-left"></div>
        <Link to="/streams/join" className="join-btn">
                    Join Now
        </Link>
        
    </div>
    );
};

export default StreamHome;