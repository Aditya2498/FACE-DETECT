import React from 'react';
import './Facerecog.css';
const Facerecog =({imageurl,box})=>{
    return(
    <div className='center ma' >
       <div className='absolute mt2' >
          <img id='inputimg' alt= 'img' src={imageurl} width= '500px' height= 'auto'/> 
          <div className = 'bounding-box' style = {{top: box.toprow,right:box.rightcol,left:box.leftcol,bottom:box.bottomrow}}></div>
       </div>
    </div> 
    );
    
}

export default Facerecog;