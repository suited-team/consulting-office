import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from "axios";

class Contact extends Component {
    constructor(props){
        super(props)
    this.state = {
      modal: false,
      Clientname:'',
      Subject:'',
      Message:''
    
    }
    this.onChange=this.onChange.bind(this)
    }
    
    onChange(e){
      this.setState({[e.target.name]:e.target.value})
      console.log(e.target.name,e.target.value)
    }
    
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }
    render() {
      return (
        <MDBContainer> 
          <MDBBtn clessName='danger ' onClick={this.toggle}>Contact Client</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}><div style={{width:'390px',fontFamily:'serif',fontSize:'25px',fontWeight:'bold'}}>Contact Client</div></MDBModalHeader>
            <MDBModalBody style={{backgroundColor:'whiteSmoke'}}>
                <center>
            <form style={{ fontSize: "22px",fontWeight:'bold' }} onSubmit={this.onSubmit}>
                          <label name="Employeename"><strong>Client name</strong></label><br/>
                          <input
                            required
                            name="Clientname"
                            type="text"
                            placeholder="Client Name"
                            onChange={this.onChange}
                            className="input"
                          ></input>
                          <br></br>
                          <label name="Clientname"><strong>Subject</strong></label>
                          <br></br>
                          <input
                            required
                            name="Subject"
                            type="text"
                            placeholder="Subject"
                            onChange={this.onChange}
                            className="input"
                          ></input>
                          <br></br>
                          <label name="Message">
                            <strong>Message</strong>
                          </label>
                          <br></br>
                          <input
                            required
                            name="Message"
                            type="text"
                            onChange={this.onChange}
                            className="input"
                          ></input>
                          <br></br><br></br>
            <MDBBtn color="red">
Send            </MDBBtn>
                        </form>
                        </center>
            </MDBModalBody>
            
          </MDBModal>
        </MDBContainer>
        );
      }
    }
    
export default Contact;