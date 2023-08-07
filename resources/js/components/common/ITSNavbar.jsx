import React, { useEffect, useState } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Nav,Navbar,NavDropdown } from "react-bootstrap";
import imgs from "/images/gic_logo.png";
import { BsFillHouseFill } from "react-icons/bs";
import "../../../css/common.css";
import properties from "../../properties";

function ITSNavbar() {
    useEffect(() => {

    }, []);

    const UserMenu = (
        <img
          src={'https://github.com/mshaaban0.png'}
          alt="UserName profile image"
          style={{ width: '40px' }}
          className="rounded-circle shadow-4-strong"
        />
      )

    return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav1">
      <Container>
      <Navbar.Brand href="/">
        <img src={imgs} className="gic-logo" alt="Facebook"/>
    </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Navbar.Brand href="/" className="brand-title">
            {properties.lbl_companyName}
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav2">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <span className="home-icon"><BsFillHouseFill /></span><Nav.Link  href="/home">{properties.lbl_home}</Nav.Link>
          <NavDropdown title={properties.lbl_engineerTitle} id="collasible-nav-dropdown">
            <NavDropdown.Item href="/engineerList" className="dropdown_item">{properties.lbl_engineerListTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/insertEngineer" className="dropdown_item">{properties.lbl_insertEngineerTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/searchEngineer" className="dropdown_item">{properties.lbl_searchEngineerTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/engineerSearchResult" className="dropdown_item">{properties.lbl_engineerSearchResultTitle}</NavDropdown.Item>            
          </NavDropdown>
          <NavDropdown title={properties.lbl_orderTitle} id="collasible-nav-dropdown">
            <NavDropdown.Item href="/orderList" className="dropdown_item">{properties.lbl_orderListTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/insertOrder" className="dropdown_item">{properties.lbl_insertOrderTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/searchOrder" className="dropdown_item">{properties.lbl_searchOrderTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/orderSearchResult" className="dropdown_item">{properties.lbl_orderSearchResultTitle}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={properties.lbl_offshoreTitle} className="drop_down" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/sales" className="dropdown_item">{properties.lbl_salesTitle}</NavDropdown.Item>
            <NavDropdown.Item href="/insertProgressStatus" className="dropdown_item">{properties.lbl_insertProgressStatusTitle}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <NavDropdown title={UserMenu} id="collasible-nav-dropdown" className="user-image">
            <NavDropdown.Item href="#action/3.1" className="dropdown-item">{properties.lbl_passwordUpdate}</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dropdown-item">{properties.lbl_logout}</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#deets" className="login-user-name">チョー様</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default ITSNavbar;
