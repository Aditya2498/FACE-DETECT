import React from 'react';
import Tilt from 'react-tilt';
import focus from './focus.png';
import './Logo.css';

const Logo = () =>{
    return(
        <div className= 'ma4 mt0 left'>
         <Tilt className="Tilt " options={{ max : 30 }} style={{ height: 130, width: 130 }} >
             <div className="Tilt-inner"><img src={focus} alt='eye'/></div>
         </Tilt>
        </div>
        
       );
    
}

export default Logo;
