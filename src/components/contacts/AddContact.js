import { v4 as uuid } from "uuid";

import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  };

  onNameChange = (e) => this.setState({ name: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onPhoneChange = (e) => this.setState({ phone: e.target.value });
  //onChange = e => this.setState({ [e.target.name]: e.target.value});

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone Number..."
                      value={phone}
                      onChange={this.onPhoneChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
