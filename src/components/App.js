import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamHome from './streams/StreamHome';
import StreamDiscover from './streams/StreamDiscover';
import StreamJoin from './streams/StreamJoin';
import StreamVideo from './streams/StreamVideo';
import Header from './Header';
import "../styles.css";

const App = () => {
    return (
    <div className="container">
        <BrowserRouter>
            <div>
            <Header />
                <Route path="/" exact component={StreamHome} />
                <Route path="/streams/discover" exact component={StreamDiscover} />
                <Route path="/streams/join" exact component={StreamJoin} />
                <Route path="/streams/video" exact component={StreamVideo} />
            </div>
        </BrowserRouter>
    </div>
    );
};

export default App;