import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import axios from "axios";
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">IRADA Consulting</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">My Tasks</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
                
            <MDBNavLink to='/chat' onClick={(e)=>{
               e.preventDefault();
               window.location.replace("https://irada-messaging.herokuapp.com")
              }
            }> 
               Chat
          </MDBNavLink> 
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
                &nbsp; Edit profile
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <input type="password" placeholder="password" id="username" />
                <MDBDropdownItem
                  onClick={() => {
                    let obj = {
                      password: document.getElementById("password").value,
                      email: localStorage.getItem("emailEmployee"),
                    };
                    axios
                      .put(
                        "https://server-cunsulting.herokuapp.com/employee/update",
                        obj
                      )
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

export default NavbarPage;
