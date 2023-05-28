import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = ({ name, number }) => {
    const newContacts = {
      name,
      number,
      id: nanoid(),
    };
    const find = this.state.contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );

    find
      ? alert(find.name + ' is already in contacts.')
      : this.setState(prevState => ({
          contacts: [newContacts, ...prevState.contacts],
        }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        {/* <Filter></Filter> */}
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default App;
