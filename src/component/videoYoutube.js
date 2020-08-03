import React from 'react';
import ReactPlayer from 'react-player';
import './videoYoutube.css';


const VideoYoutube =({urlVideo, titleVideo, }) =>{
  return(
    <div>
      <div className="containerVideo">
        <ReactPlayer url={urlVideo} width="360px"/>
        <h6 className="display-5">{titleVideo}</h6>
      </div>    
    </div>
  );
 
}

export default VideoYoutube;