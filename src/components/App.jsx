import React, { Component } from "react";
import NavbarPage from "./Navbar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import Task from "./Task.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {localStorage.getItem("tokenEmployee") !== null ? (
            <Router>
              <div>
                <NavbarPage />
                <Switch>
                  <Route path="/profile" exact component={Profile}></Route>
                  <Route path="/" exact component={Task}></Route>
                </Switch>
              </div>
            </Router>
          ) : (
            <Router>
              <Switch>
                <Route path="/" exact exact component={Login} />
              </Switch>
            </Router>
          )}
        </div>
      </div>
    );
  }
}

export default App;
