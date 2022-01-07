import React from 'react';
import { Link } from 'react-router-dom';


const StreamJoin = () => {
    return (
        <div>
            <h1 className="join-title">Join the <span>fun.</span></h1>
        <div className="ui segment join">
            <div className="ui form">
                <div className="two fields">
                    <div className="six wide field join">
                        <label className="label-join">First Name</label>
                        <input className="input-join"
                        placeholder="Joe" 
                        type="text" />
                    </div>
                    <div className="six wide field join">
                        <label className="label-join">Last Name</label>
                        <input className="input-join"
                        placeholder="Schmoe" 
                        type="text" />
                    </div>
                    <div className="six wide field join">
                        <label className="label-join">E-mail</label>
                        <input className="input-join"
                        type="email" 
                        placeholder="joe@schmoe.com" />
                    </div>
                </div>
                <div className="ui form success">
                <Link to="/streams/video" className="ui submit button">
                    Click to begin
                </Link>  
                </div>
            </div>
        </div>
    </div>
    );
};

export default StreamJoin;