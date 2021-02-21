import React from 'react';
import './Imagelinkform.css';

const Imagelinkform = ({onInput,onButtonsubmit }) => {
    return(
    <div >
          <p className = 'f3 center fw8'>{'AUTO-MATED FACE DETECTION '}</p>
          <p className = 'f3 center'>{ '(Please add picture to detect faces)'}</p>

         <div className = 'center '>
              <div className = ' form pa4 br3 shadow-5'>
               <input className='f4 pa2 w-70  ' type='text' onChange ={onInput} />
               <button className= 'w-30 grow f4 link ph3 pv2 dib white bg-black ' onClick={onButtonsubmit}>Detect</button>
             </div>
        </div>
    </div>
        
         
    );

}

export default Imagelinkform;