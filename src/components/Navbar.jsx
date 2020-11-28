import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
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

export default NavbarPage;
