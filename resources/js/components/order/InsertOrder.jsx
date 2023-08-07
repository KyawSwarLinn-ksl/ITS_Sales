import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import * as CuiForm from "@coreui/react";

class InsertOrder extends React.Component {
    render() {
        return (
            <Container>
                <CuiForm.CForm>
                    <div className="row mb-2 mt-3">
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>発注_請求金額（CT税抜）</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <CuiForm.CFormLabel>Email address</CuiForm.CFormLabel>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <CuiForm.CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CuiForm.CFormCheck
                        className="mb-3"
                        label="Check me out"
                        onChange={(e) => {
                        console.log(e.target)
                        }}
                    />
                    <CuiForm.CButton type="submit" color="primary">
                        Submit
                    </CuiForm.CButton>
                </CuiForm.CForm>
            </Container>
        );
    }
}
export default InsertOrder;
ReactDOM.render(<InsertOrder />, document.getElementById("app"));
