import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item-select">
            <img className="thumbnail" alt={video.snippet.title} src={ video.snippet.thumbnails.medium.url } />
            <div className="content">
                <div className="header">{ video.snippet.title }</div>
            </div>
        </div>
    )};

export default VideoItem;