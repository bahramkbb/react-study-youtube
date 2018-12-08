import React from 'react';

const VideoListItem = ({video, handleVideoSelect}) => {
  return (
    <div className="video-list media" onClick={() => handleVideoSelect(video)}>
      <div className="media-left">
        <img className="media-object" src={video.snippet.thumbnails.default.url} />
      </div>
      <div className="media-body">
        <div className="media-heading">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoListItem;
