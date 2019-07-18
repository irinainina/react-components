import React, { Component } from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

import Video_1 from './video/video1.mp4';
import Video_2 from './video/video2.mp4';
import Video_3 from './video/video3.mp4';
import Video_4 from './video/video4.mp4';

export default class VideoPlayer extends Component {
  state= {
    video: Video_1
  }
  render() {
    return (
      <div style={{width: 800, margin: '20px auto'}}>
      <Player
        playsInline
        poster=""
        src={this.state.video}
      />
      </div>
    );
  }
}
