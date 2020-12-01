import React, { Component } from "react";
import axios from "axios";
import '../components/Task.css';
import Table from "react-bootstrap/Table";
import { Dropdown } from 'react-bootstrap';
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  check() {
    let obj={
      email:localStorage.getItem('emailEmployee')
    }

    axios.get("https://server-cunsulting.herokuapp.com/task/Employee").then((response) => {
      //need to change the link
      if (response.data.length > this.state.data.length) {
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    this.check();
    console.log(this.state.data);

    return (
      <div style={{marginTop:'100px',marginLeft:'200px'}}>
        
        
          <Table
          style={{width:'1000px',fontSize:'20px'}}
          striped
          bordered
          hover
          variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description of the Task</th>
              <th>Client name</th>
              <th>Employee name</th>
              <th>Creation date</th>
              <th>Due date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((t, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>descp </td>
                <td>{t.ClientName}</td>
                <td>{t.EmployeeName}</td>
                <td>{t.startDate}</td>
                <td>{t.DueDate}</td>
                <td>
                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Change status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item style={{backgroundColor:'#387DF8',color:'white'}}>In progress</Dropdown.Item>
    <Dropdown.Item style={{backgroundColor:'red',color:'white'}} >On hold</Dropdown.Item>
    <Dropdown.Item style={{backgroundColor:'green',color:'white'}}>Done</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                </td>
              </tr>
            ))}
         
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Task;
