import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

import "../css/navbar.css"

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar variant="light" expand="xl" fixed="top" className="navbar">
          <Navbar.Brand href="/">
            <Navbar.Text className="navbarTitle">Home</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href = "/about" className = "link">About</Nav.Link>
              <Nav.Link href="/resume" className="link">Resume</Nav.Link>
              <Nav.Link href="/projects" className="link">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}