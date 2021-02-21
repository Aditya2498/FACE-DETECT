import React from 'react';


const Rank= ({name,entries}) => {
    return(
        <div className ='tc'>
           <div className = 'black f3 '>
           {`${name},your Current Rank is :`}
           </div>
           <div className = 'black f1 '>
           {entries}
           </div>
        </div>
    )
    

}

export default Rank;