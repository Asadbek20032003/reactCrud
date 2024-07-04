import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import { CiRead } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Header from "./Header";
// import ReadDataModal from "./ReadDataModal";
// import data from "./data/data";
// import Madal from "./modal/Madal";

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { Name: "", Age: "", City: "", E_mail: "", Phone: "", Post: "", sDate: "" },
      list: [
        {
          id: "asfdsdaf",
          Name: "Salom",
          Age: "22",
          City: "qawsedrftgy",
          E_mail: "asadbek@ssds.com",
          Phone: "1211212",
          Post: "+999299929",
          sDate: "2022-11-11",
        },
      ],
      show: false,
      editId: "",
      textSubmit: "Add",
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { data } = this.state;
    this.setState({
      data: { ...data, [name]: value },
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleClose() {
    const { list, data, editId } = this.state;
    this.setState({
      data: {
        Name: "",
        Age: "",
        City: "",
        E_mail: "",
        Phone: "",
        Post: "",
        sDate: "",
      },
      editId: "",
      textSubmit: "Add",
      list: list.map((item) => (item.id === editId ? { id: editId, ...data } : item)),
      show: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { list, data, editId } = this.state;

    if (editId) {
      this.setState({
        data: {
          Name: "",
          Age: "",
          City: "",
          E_mail: "",
          Phone: "",
          Post: "",
          sDate: "",
        },
        editId: "",
        show: false,
        textSubmit: "Add",
        list: list.map((item) => (item.id === editId ? { id: editId, ...data } : item)),
      });
      console.log("EDIT", data);
    } else {
      this.setState({
        list: [...list, { id: `${data.Name}_${list.length}`, ...data }],
        data: {
          Name: "",
          Age: "",
          City: "",
          E_mail: "",
          Phone: "",
          Post: "",
          sDate: "",
        },
        show: false,
      });
    }
  }

  handleEdit(id) {
    const findData = this.state.list.find((item) => item.id === id);

    this.setState({
      editId: findData.id,
      Name: findData.Name,

      data: {
        Name: findData.Name,
        Age: findData.Age,
        City: findData.City,
        E_mail: findData.E_mail,
        Phone: findData.Phone,
        Post: findData.Post,
        sDate: findData.sDate,
      },
      textSubmit: "Edit",
      show: true,
    });
  }

  handleDelete(id) {
    const filterData = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: filterData,
    });
  }
  render() {
    return (
      <>
        <section className="p-3">
          <div className="row">
            <div className="col-12">
              <Header handleShow={() => this.handleShow()} />
              <div className="modal fade" id="userForm">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <Modal show={this.state.show}>
                      <Modal.Header className="modal-header" closeButton onClick={() => this.handleClose()}>
                        <Modal.Title>Fill the Form</Modal.Title>
                      </Modal.Header>
                      <div className="modal-body">
                        <Form action="#" id="myForm" onSubmit={(e) => this.handleSubmit(e)}>
                          {/* <Form.Group className="inputField">
                            {data.ReadData_Modal.map((item, idx) => {
                              return (
                                <Form.Group key={idx}>
                                  <Form.Label htmlFor={item.for}>{item.title}</Form.Label>
                                  <Form.Control
                                    type={item.type}
                                    name={item.name}
                                    id={item.id}
                                    value={item.value || ""}
                                    placeholder={item.placeholder}
                                    onChange={(e) => this.handleChange(e)}
                                    required
                                  />
                                </Form.Group>
                              );
                            })}
                          </Form.Group> */}
                          <Form.Group className="inputField">
                            <Form.Group>
                              <Form.Label htmlFor="Name">Name:</Form.Label>
                              <Form.Control
                                type="text"
                                name="Name"
                                id="Name"
                                placeholder="Full Name"
                                value={this.state.data.Name}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="Age">Age:</Form.Label>
                              <Form.Control
                                type="number"
                                name="Age"
                                id="Age"
                                placeholder="Age"
                                value={this.state.data.Age}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="City">City:</Form.Label>
                              <Form.Control
                                type="text"
                                name="City"
                                id="City"
                                placeholder="City"
                                value={this.state.data.City}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="E_mail">E_mail:</Form.Label>
                              <Form.Control
                                type="text"
                                name="E_mail"
                                id="E_mail"
                                placeholder="e_mail"
                                value={this.state.data.E_mail}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="Phone">Phone:</Form.Label>
                              <Form.Control
                                type="text"
                                name="Phone"
                                id="Phone"
                                placeholder="Phone"
                                minLength="9"
                                maxLength="12"
                                value={this.state.data.Phone}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="Post">Post:</Form.Label>
                              <Form.Control
                                type="text"
                                name="Post"
                                id="Post"
                                placeholder="Post"
                                value={this.state.data.Post}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="sDate">Start Date:</Form.Label>
                              <Form.Control
                                type="date"
                                name="sDate"
                                id="sDate"
                                placeholder="sDate"
                                value={this.state.data.sDate}
                                onChange={(e) => this.handleChange(e)}
                                required
                              />
                            </Form.Group>
                          </Form.Group>
                        </Form>
                      </div>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          className="btn btn-primary submit"
                          onClick={(e) => this.handleSubmit(e)}
                        >
                          {this.state.textSubmit}
                        </Button>
                        <Button variant="secondary" className="btn btn-secondary" onClick={() => this.handleClose()}>
                          close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <table className="table table-striped table-hover mt-3 text-center table-bordered">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Post</th>
                    <th>Start Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="data">
                  {this.state.list.map((item, indx) => (
                    <tr key={item.id}>
                      <td>{indx + 1}</td>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.City}</td>
                      <td>{item.E_mail}</td>
                      <td>{item.Phone}</td>
                      <td>{item.Post}</td>
                      <td>{item.sDate}</td>
                      <td>
                        {/* <button className="btn btn-success" onClick={() => this.handleRead(item.id)}>
                          <CiRead />
                        </button> */}
                        <button className="btn btn-primary" onClick={() => this.handleEdit(item.id)}>
                          <FaEdit />
                        </button>
                        <button className="btn btn-danger" onClick={() => this.handleDelete(item.id)}>
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    );
  }
}
