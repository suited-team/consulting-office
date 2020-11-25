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




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    PrivateRoute,
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


    
  </Navbar.Collapse>

  <Nav>
    {/* <PrivateRoute path="/Logout" component={Logout}/> */}
    <Link className="OK" onClick={()=>window.location.reload()}>Logout</Link> 
  </Nav>


</Navbar>

</div>
<Switch>
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route exact path="/MsgService" component={MsgService} />

</Switch>
<Switch>

<Route exact path="/Logout" component={Logout} />
</Switch>


</Router>

    );
  }
}
export default NavbarComp;
