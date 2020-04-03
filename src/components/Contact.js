import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state={};

  onShowClick =(e) => {

};

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '} <i  
          onClick={this.onShowClick} 
          className="fas fa-sort-down" />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

Contact.defaultProps = {
  name: "Add name",
  email: "Add email",
  phone: "Add phone number",
};

export default Contact;
