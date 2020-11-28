import React, { Component } from "react";
import axios from "axios";
import TaskM from "./Tasks";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/DropDown';
import './Task.css';




class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  check() {
    axios.get("http://localhost:5500/task").then((response) => {
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
      <div >
        <div class="table-responsive fix-table-height">

<Table style={{marginRight:"1000px"}} striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Description of the Task</th>
      <th>Client</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">In Progress</Dropdown.Item>
    <Dropdown.Item href="#/action-2">On Hold</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">In Progress</Dropdown.Item>
    <Dropdown.Item href="#/action-2">On Hold</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td><Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">In Progress</Dropdown.Item>
    <Dropdown.Item href="#/action-2">On Hold</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</td>
    </tr>
  </tbody>
</Table>
</div>
        {this.state.data.map((element, index) => {
          return element.status === "fase 1" ? (
            <div className="phase1">
              <TaskM task={element} key={index} />
            </div>
          ) : element.status === "fase 2" ? (
            <div className="phase2">
              <TaskM task={element} key={index} />
            </div>
          ) : element.status === "fase 3" ? (
            <div className="phase3">
              <TaskM task={element} key={index} />{" "}
            </div>
          ) : (
            <div className="phase4">
              <TaskM task={element} key={index} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Task;
