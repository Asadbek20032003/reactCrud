import React from "react";
import Form from "react-bootstrap/Form";
import data from "./data/data";

const ReadDataModal = ({ onChange, value }) => {
  return (
    <Form.Group className="inputField">
      {data.ReadData_Modal.map((item, idx) => {
        return (
          <Form.Group key={idx}>
            <Form.Label htmlFor={item.for}>{item.title}</Form.Label>
            <Form.Control
              type={item.type}
              name={item.name}
              id={item.id}
              value={value.value}
              placeholder={item.placeholder}
              onChange={onChange}
              required
            />
          </Form.Group>
        );
      })}
    </Form.Group>
  );
};

export default ReadDataModal;
