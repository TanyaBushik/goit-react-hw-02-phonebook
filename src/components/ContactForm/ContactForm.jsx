import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Name } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  // handleSubmit = ({ values }) => {
  //   this.props.onSubmit(values);
  //   this.setState(values);
  // };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <Name
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          ></Name>
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // type="tel"
            // name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
