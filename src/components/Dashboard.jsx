import React from 'react'
 import {
    BrowserRouter as Router,
     Switch,
     Route,
     useParams
   } from "react-router-dom";
   import {LinkContainer} from "react-router-bootstrap";
   import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Col,Row } from 'react-bootstrap';
   import 'bootstrap/dist/css/bootstrap.min.css';
class Dashboard extends React.Component {

render() {
  return (
    <div>        
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Tasks
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Clients
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Status
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="To Do"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="In Progress"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Done"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Save Information</Button>
    </Col>
  </Form.Group>
</Form>
    </div>
      
  )
}
}

export default Dashboard;
