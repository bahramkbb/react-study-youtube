import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Application components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyDUmNbpkVwe2mj_20Kkby3vO3SWD1EJ4Bg';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('books');
  }

  videoSearch(term){
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) =>
      {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        });
      });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return(
      <div>
        <SearchBar handleSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          handleVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
