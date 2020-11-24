import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import MsgService from './MsgService.jsx';
import Dashboard from'./Dashboard.jsx'
import './NavbarComp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/links.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


class NavbarComp extends React.Component {
  render() {
    return (
      <Router>

      <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">IRADA CONSULTING</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">


    <Link className="links" to="/Dashboard">Dashboard</Link>
   <Link className="links" to="/MsgService">MsgService</Link>
 
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
 

</Navbar>
</div>
<Switch>
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route exact path="/MsgService" component={MsgService} />
  </Switch>

</Router>

    );
  }
}
export default NavbarComp;
