
import React,{Component} from 'react';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state={
        signInEmail : '',
        signInPassword: ''
 }
    
  }
   onSignInEmail =(event)=>{
     this.setState({signInEmail:event.target.value});
   } 
   
   onSignInPassword = (event) =>{
     this.setState({signInPassword:event.target.value});
   }

   onSignInSubmit =(event) =>{
     event.preventDefault();
      fetch('https://rocky-shore-03829.herokuapp.com/signin',{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
          { email: this.state.signInEmail,
        password: this.state.signInPassword }) 
               })
      .then(response => response.json())
      .then(user => {
        if (user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home'); }
       }) 
  }

  render(){
    const{onRouteChange}= this.props;
     return(
    <article className="br3  ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80 ">
         <form className="measure">
          <legend className="f1 fw6 ph0 mh0  ">Sign In</legend>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
         <div className="mt3">
         <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
         <input 
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="email"
            name="email-address" 
            id="email-address"
            onChange = {this.onSignInEmail}
            />
         </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password" 
          autoComplete='on'
          onChange={this.onSignInPassword}
          />
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onSignInSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p  onClick={()=> onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
    </div>
     </form>
   </main>
</article>
    );
  }
 
    }

export default SignIn;