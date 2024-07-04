import React, { Component, Children } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

export default class Madal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.handleClose()}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Fill the Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-secondary" onClick={() => this.handleClose()}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
