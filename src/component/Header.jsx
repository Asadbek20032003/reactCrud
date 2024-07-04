import React from "react";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <Button
      className="btn btn-primary newUser"
      data-bs-toggle="modal"
      data-bs-target="#userForm"
      variant="primary"
      onClick={() => props.handleShow()}
    >
      New User <i className="bi bi-people"></i>
    </Button>
  );
};

export default Header;
