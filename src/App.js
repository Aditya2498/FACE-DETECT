import React, { Component } from 'react';
import Imagelinkform from './components/Imagelinkform/Imagelinkform';
import Facerecog from './components/Facerecog/Facerecog';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';

const particleOptions = { 
  particles: { 
    number:{value:60, density:{ 
    enable: true, value_area:800}},
    color: { value: ['#FF0000'] },
    line_linked: {color: '#000000',
    opacity: 1}}}



const initialState = {
  input:'',
  imageurl:'',
  box:{},
  route:'',
  isSignedin:false,
  user :{
    id: '',
    name: '',
    email: '',
    entries:0,
    joined: ''
  }
}

class App extends Component{

  constructor(){
    super();
    this.state= initialState;
  }

     loadUser = (data) =>{
         this.setState({user:{
          id: data.id,
          name: data.name,
          email: data.email,
          entries:data.entries,
          joined: data.joined

         }})
     }

      calcfaceloc = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const img = document.getElementById('inputimg');
        const width = Number(img.width);
        const height = Number(img.height);
      
        return { bottomrow:height-(clarifaiFace.bottom_row*height),
            leftcol:clarifaiFace.left_col*width,
            rightcol:width-(clarifaiFace.right_col*width),
           toprow:clarifaiFace.top_row*height, }
           }

      displayfacebox = (box) =>{
        this.setState({box:box})
      };
        
       
    onInput = (event) =>{
      this.setState({input: event.target.value}); }

    onPicturesubmit = () =>{
      this.setState({imageurl: this.state.input});
      fetch('https://rocky-shore-03829.herokuapp.com/imageurl',{
          method:'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 
              input:this.state.input
           })
           })
          .then (response => response.json())
        .then(response => {
          if(response){
            fetch('https://rocky-shore-03829.herokuapp.com/image',{
              method:'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(
                { id:this.state.user.id
             }) }) 
                 .then(response => response.json())
                 .then(count=> {
                   this.setState(Object.assign(this.state.user,{entries:count}))
                 })
                 .catch(console.log)
             }
          this.displayfacebox(this.calcfaceloc(response)) })
         .catch (err =>console.log(err)); } 
    
    onRouteChange = (route) =>{
      if (route==='signout'){
        this.setState(initialState)
      }else if (route==='home'){
        this.setState({isSignedin:true})
      }
      this.setState ({route:route})
    }
    
            
 render(){ 
  const {isSignedin,imageurl,route,box} = this.state;
 
  return (
    <div className='App'>
    <Particles className = 'particles'
     params={ particleOptions} />
      <Navigation  isSignedin= {isSignedin} onRouteChange = {this.onRouteChange} />
      { route==='home'
       ?<div>
       
       <Logo/>

       <Rank name={this.state.user.name} entries={this.state.user.entries}/>
       
       <Imagelinkform 
       onInput={this.onInput} 
       onButtonsubmit={this.onPicturesubmit} />

       <Facerecog  box ={box} imageurl= {imageurl}/>

      </div>
      :(
                route === 'signIn' ?
               <SignIn  loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
               :<Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
         )}
      </div>
  );}
}

export default App;
