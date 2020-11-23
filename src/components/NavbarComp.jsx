import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import {LinkContainer} from "react-router-bootstrap";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from './Home.jsx';
  import About from './MsgService.jsx';
  import Shop from './Dashboard.jsx';

  import 'bootstrap/dist/css/bootstrap.min.css';


class NavbarComp extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {/* <Router> */}
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav"> */}
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <LinkContainer to="/Shop.jsx"><Nav.Link>Shop</Nav.Link></LinkContainer>

{/*                                     <Nav.Link href="/shop">Shop</Nav.Link>
                                    <Route exact path="./Shop.jsx" component={Shop} />
 */}                                    <Nav.Link href="./About.jsx">About Us</Nav.Link>
                                   
                                    </Nav>                                   
                                {/* </Navbar.Collapse> */}
                            </Navbar>
                            <br />
                           {/*  <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="./About.jsx">
                                    <About />
                                </Route>
                                <Route path="/shop">
                                    <Shop />
                                </Route>
                            </Switch> */}
                        <Routes />
                    </div>
                </div>
            </div>
        )  
    }
}

export default NavbarComp;