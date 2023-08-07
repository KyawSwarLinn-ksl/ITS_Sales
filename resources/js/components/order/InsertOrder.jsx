import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import * as bForm from 'react-bootstrap';

class InsertOrder extends React.Component {
    render() {
        return (
            <Container>
                <bForm.Form>
                    <bForm.Form.Group className="row mb-3 mt-3" controlId="formBasicEmail">
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <bForm.Form.Label>Email address</bForm.Form.Label>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <bForm.Form.Control type="email" placeholder="Enter email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <bForm.Form.Label>Email address</bForm.Form.Label>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <bForm.Form.Control type="email" placeholder="Enter email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <bForm.Form.Label>Email address</bForm.Form.Label>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <bForm.Form.Control type="email" placeholder="Enter email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <bForm.Form.Label>Email address</bForm.Form.Label>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <bForm.Form.Control type="email" placeholder="Enter email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <bForm.Form.Label>Email address</bForm.Form.Label>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <bForm.Form.Control type="email" placeholder="Enter email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <bForm.Form.Label>Email address</bForm.Form.Label>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <bForm.Form.Control type="email" placeholder="Enter email" />
                                </div>
                            </div>
                        </div>
                    </bForm.Form.Group>
                </bForm.Form>
            </Container>
        );
    }
}
export default InsertOrder;
ReactDOM.render(<InsertOrder />, document.getElementById("app"));
