import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import Swal from 'sweetalert2'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    // axios.post();
    console.log(this.state);
    if (this.state.email === "") {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email!',
        footer: '<a href>Why do I have this issue?</a>'
      }) 
    } else if (this.state.password === "") {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid password!',
        footer: '<a href>Why do I have this issue?</a>'
      }) 
    }
    axios
      .post("https://server-cunsulting.herokuapp.com/employee/login", this.state)
      .then((res) => {
        console.log(res);
        if (res.data !== "") {
          localStorage.setItem("tokenEmployee", res.data);
          localStorage.setItem("emailEmployee", this.state.email);

          window.location.reload();
        } else {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email or Password are incorrect!',
            footer: '<a href>Why do I have this issue?</a>'
          }) 
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h4 text-center mb-4">Sign in</p>
                <div className="blue-text">
                  <MDBInput
                    name="email"
                    className="input"
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    required
                    error="wrong"
                    success="right"
                    onChange={this.onChange}
                  />
                  <MDBInput
                    name="password"
                    className="input"
                    label="Type your password"
                    icon="lock"
                    group
                    required
                    type="password"
                    validate
                    onChange={this.onChange}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn tyoe="Submit" onClick={this.onSubmit}>
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Login;
