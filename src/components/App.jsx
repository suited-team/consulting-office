import React, { Component } from "react";
import NavbarComp from "./NavbarComp.jsx";
import Login from "./Login.jsx";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      view : "main",
      isloggedin: false,
    }
    this.changeView = this.changeView.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  changeView(e) {
    this.setState({ isloggedin: true });
  }
  
  render() {
    if (this.state.isloggedin === false) {
      return (
          <Login changeView={this.changeView}/>
      )
    } else  {
      return (
        
        
      <NavbarComp />
      
      )
    }
  }
}
    
  

export default App;
