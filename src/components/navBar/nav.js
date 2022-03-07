import React, { Component } from 'react';
import style from './nav.css'
import { Navbar,Container,Nav,FormControl,Button,NavDropdown,Form } from 'react-bootstrap';

export default class navBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">HR</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href='/'>Dashboard</Nav.Link>
                <Nav.Link href="/employees">Employees</Nav.Link>
                <Nav.Link href="/attendance">Attendance</Nav.Link>
                <Nav.Link href="/leave-management">Leave Management</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
