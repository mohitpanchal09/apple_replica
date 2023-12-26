import React from "react";
import logo from "../commonResource/images/icons/logo-sm.png";
import search from "../commonResource/images/icons/search-icon-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import './Header.css'
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
    <div className="container">
      <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand href="/">
        <img src={logo} alt="" />
      </Navbar.Brand>
  
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-justified w-100 nav-fill" style={{display:'flex',justifyContent:'center',gap:'20px'}}>
        <Nav.Link className="nav-link" href="#">
          Mac
        </Nav.Link>
        <Nav.Link href="/iphone">iphone</Nav.Link>
        <Nav.Link href="/ipad">ipad</Nav.Link>
        <Nav.Link href="/watch">watch</Nav.Link>
        <Nav.Link href="/tv">tv</Nav.Link>
        <Nav.Link href="/music">Music</Nav.Link>
        <Nav.Link href="/support">Support</Nav.Link>
        <Nav.Link href="/#">
          <img src={search} alt="" />
        </Nav.Link>
        <Nav.Link href="/#">
          <img src={cart} alt="" />
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default Header;
