import React, { useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null);
    
    const closePlayer = (e) =>{
        if (e.target ===player.current){
            setPlayState(false)
        }
    }
  return (
    <div ref={player} className={`video-player ${playState ? "" : "hide" }`} onClick={closePlayer}>
      <video src="https://www.pexels.com/video/students-greeting-each-other-in-university-campus-7971025/" autoPlay muted controls></video>  
    </div>
  )
}

export default VideoPlayer

// download video and move to assets folder and import the file path then render
