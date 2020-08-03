import React from 'react';
import Powerslap from '../Asset/video/powerslap.mp4';


const BackgroundVideo = () => {
  
  return(
   <video autoPlay loop muted
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          paddingTop:"50px",
        
          
        }}
   >
     <source src={Powerslap} type="video/mp4" />
   </video>

  )
}

export default BackgroundVideo;