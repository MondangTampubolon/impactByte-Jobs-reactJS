import React from 'react';
import { Button } from 'react-bootstrap';

import './cardPhilosophy.css';


const CardPhilosophy = ({title, desc, position, src, redhr, classCard, widthimg, textButton}) => {
  return(
    <div className="wrapper">
        <div className={"cardPhilosophy " + classCard}>
              <div className={"col p-5 " + position} >
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <Button variant="danger">{textButton}</Button>
              </div>
              {redhr}
                  <img src={src} alt="" width={widthimg}/>
      </div>
    </div>
      
  );
}

export default CardPhilosophy;