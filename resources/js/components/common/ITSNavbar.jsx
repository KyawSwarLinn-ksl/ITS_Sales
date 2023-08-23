import React, { useEffect, useState } from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import gic_logo from "/images/gic_logo.png";
import "../../../css/common.css";
import properties from "../../properties";

function ITSNavbar() {
    useEffect(() => {

    }, []);

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-bar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <img src={gic_logo} alt="hugenerd" className="gic-logo" /><span className="fs-5 d-none d-sm-inline">GIC</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="/engineerList" className="nav-item nav-link px-0"><i className="bi bi-house-door menu-icon"></i><span >{properties.lbl_home}</span></a>
                </li>
                <li className="nav-item">
                  <a href="/engineerList" className="nav-item nav-link px-0"><i className="bi bi-person-lines-fill menu-icon"></i><span >{properties.lbl_engineerListTitle}</span></a>
                </li>
                <li className="nav-item">
                  <a href="/engineerList" className="nav-item nav-link px-0"><i className="bi bi-house-door menu-icon"></i><span >{properties.lbl_orderListTitle}</span></a>
                </li>
              </ul> 
            </div>
        </div>
  );
}

export default ITSNavbar;