import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import "../css/navbar.css"

const dropDownIcon = require('../data/dropdown.png');


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
                <NavDropdown src={dropDownIcon}  fixed="right" width="200" height = "200" id="collasible-nav-dropdown" class="dropdown-menu" right="0" left= "auto">
                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
                    <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>

                </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}