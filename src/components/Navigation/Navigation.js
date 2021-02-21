import React from 'react';

const Navigation = ({onRouteChange,isSignedin}) =>{
   if (isSignedin){
       return(
    <nav className='f3 link dim black underline pa3 pointer' style={{display:'flex',justifyContent:'flex-end'}}> 
    <p onClick = {()=>onRouteChange('signout')}>Sign Out</p>
    </nav>);
} else {
    return(
        <nav  style={{display:'flex',justifyContent:'flex-end'}}> 
         <p className='f4 link dim black underline pa3 pointer' onClick = {()=>onRouteChange('signIn')}> Sign In </p>
         <p  className='f4 link dim black underline pa3 pointer' onClick = {()=>onRouteChange('register')}> Register </p>
        </nav>
         );
}
    
}

export default Navigation;