import React, { Component } from "react";
import NavbarComp from "./NavbarComp.jsx";
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
        
      

<div className="container">
  <br></br><br></br><br></br><br></br>
  <div className="d-flex justify-content-center h-100">
    <div className="card">
      <div className="card-header">
       <h3>Sign In</h3>
        <div class="d-flex justify-content-end social_icon">
          <span><i class="fab fa-facebook-square"></i></span>
          <span><i class="fab fa-google-plus-square"></i></span>
          <span><i class="fab fa-twitter-square"></i></span>
        </div>
      </div>


    <div className="card-body">
      <form>
        <div className="input-group form-group">
          <div className="input-group-prepend">
              <span className="input-group-text"><i class="fas fa-user"></i></span>
          </div>
             <input className="form-control" type="text"  onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} placeholder="username"/>
          
           </div>


          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i class="fas fa-key"></i></span>
            </div>
              <input type="password" className="form-control" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} placeholder="password"/>
          </div>

          <div className="form-group">
            <input type="submit" value="Login" className="btn float-right login_btn" onClick={this.props.changeView} />
          </div>

      </form>
      </div>



    
  </div>
</div>
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
