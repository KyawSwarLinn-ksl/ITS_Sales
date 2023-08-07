import React, { useEffect, useState } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Nav,Navbar,NavDropdown } from "react-bootstrap";
import imgs from "/images/gic_logo.png";
import { BsFillHouseFill } from "react-icons/bs";
import "../../../css/common.css";

function ITSNavbar() {
    useEffect(() => {

    }, []);
    return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav1">
      <Container>
      <Navbar.Brand href="/">
        <img src={imgs} className="gic-logo" alt="Facebook"/>
    </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Navbar.Brand href="#home" className="brand_title">グローバルイノベーションコンサルティング株式会社</Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav2">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <span className="home_icon"><BsFillHouseFill /></span><Nav.Link href="#">ホーム</Nav.Link>
          <NavDropdown title="技術者管理" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="dropdown_item">技術者情報一覧</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dropdown_item">技術者情報登録</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="dropdown_item">技術者一覧詳細検索</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="dropdown_item">技術者一覧検索結果表示設定</NavDropdown.Item>            
          </NavDropdown>
          <NavDropdown title="受・発注管理" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="dropdown_item">受・発注情報一覧</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dropdown_item">受・発注情報登録</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="dropdown_item">受・発注情報一覧詳細検索</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="dropdown_item">受・発注情報一覧検索結果表示設定</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Offshore請負P(仕掛状況)" className="drop_down" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="dropdown_item">売上</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dropdown_item">仕掛状況登録</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}

export default ITSNavbar;
