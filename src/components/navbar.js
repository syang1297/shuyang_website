import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import "../css/navbar.css"

const dropDownIcon = require('../dropdown.png');


export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect variant="light" expand="lg" fixed="top" className="navbar">
          <Navbar.Brand href="/">
            <Navbar.Text className="navbarTitle">Shu Yang</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
                <NavDropdown src={dropDownIcon}  width="200" height = "200" id="collasible-nav-dropdown" className="">
                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
                    <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
                    <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}