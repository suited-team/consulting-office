import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import MsgService from './MsgService.jsx';
import Dashboard from'./Dashboard.jsx'
import './NavbarComp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/links.css';
import Login from'./Login.jsx';
import Logout from'./Logout.jsx';
import Task from  "./Tasks/task.jsx" ;




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    PrivateRoute,
} from 'react-router-dom';


class NavbarComp extends React.Component {
  render(){
    return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">IRADA Consulting</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/tasks">My Tasks</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/" onClick={this.onLogout}>
              Logout
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <input type="text" placeholder="username" id="username" />
                <MDBDropdownItem
                  onClick={() => {
                    let obj = {
                      name: document.getElementById("username").value,
                      email: localStorage.getItem("emailEmployee"),
                    };
                    axios
                      .put("http://localhost:5500/employee/update", obj)
                      .then((res) => {
                        console.log(res.data);
                      });
                  }}
                >
                  Update username
                </MDBDropdownItem>
                <input type="password" placeholder="password" id="username" />
                <MDBDropdownItem
                  onClick={() => {
                    let obj = {
                      password: document.getElementById("password").value,
                      email: localStorage.getItem("emailEmployee"),
                    };
                    axios
                      .put("http://localhost:5500/employee/update", obj)
                      .then((res) => {
                        console.log(res.data);
                      });
                  }}
                >
                  Update username
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}
export default NavbarComp;
