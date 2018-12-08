import React from 'react';

import VideoListItem from './video_list_item';

class VideoList extends React.Component {
  constructor(props){
    super(props);
  }

  renderVideos() {
    return this.props.videos.map(video =>
       <li key={video.etag} className="list-group-item">
       <VideoListItem
          video={video}
          handleVideoSelect={this.props.handleVideoSelect} 
       />
       </li>
    );
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderVideos()}
      </ul>
    );
  }
}

export default VideoList;
