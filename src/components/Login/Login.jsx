import React, { Component } from "react";
import NavbarComp from "../NavbarComp.jsx";
import './Login.css';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      view : "main",
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  
  
  render() {
    if (this.state.view === "main") {
      return (
        <div>
          <center>
            <br></br> <br></br>
           <form id="form">
           <h1>Hello Dear Employee </h1>
           <input type="text" placeholder="email" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/><br></br> <br></br>

             <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password}/><br></br> <br></br>

             
             <input type="button" value="Login" onClick={this.props.changeView} /><br></br> <br></br>
             
           </form>
          </center>
        </div>
      )
    } else if (this.state.view ==="Login" ) {
      return (
        <div>
        
      <NavbarComp />
      </div>
      )
    }
  }
}
    
  

export default Login;
