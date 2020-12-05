import React, { Component } from "react";
import axios from "axios";
import "../components/Task.css";
import Table from "react-bootstrap/Table";
import { Dropdown } from "react-bootstrap";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.check = this.check.bind(this);
  }

  phase(data) {
    if (data === "fase 1") {
      return "in progress";
    } else if (data === "fase 2") {
      return "on Hold";
    } else if (data === "fase 3") {
      return "almost";
    } else {
      return "Complete";
    }
  }

  check() {
    let obj = {
      email: localStorage.getItem("emailEmployee"),
    };
    console.log(obj.email);
    axios
      .post(`https://server-cunsulting.herokuapp.com/task/Employee`, obj)
      .then((response) => {
        //need to change the link
        if (response.data.length > this.state.data.length) {
          console.log(response.data);
          this.setState({ data: response.data });
        }
      });
  }

  render() {
    this.check();
    console.log(this.state.data);

    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Table
          style={{ width: "1000px", fontSize: "20px" }}
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Employee Name</th>
              <th>Creation Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((t, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{t.ClientName}</td>
                <td>{t.EmployeeName}</td>
                <td>{t.startDate}</td>
                <td>{t.DueDate}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    {this.phase(t.status)}
                    <Dropdown.Menu className='dodo'>
                      <Dropdown.Item
                        style={{ backgroundColor: "#99ebff", color: "white" }}
                      >
                        In progress
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{ backgroundColor: "#ff9999", color: "white" }}
                      >
                        On hold
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{ backgroundColor: "#ffbf80", color: "white" }}
                      >
                        almost
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{ backgroundColor: "#99e699", color: "white" }}
                      >
                        Done
                      </Dropdown.Item>
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
