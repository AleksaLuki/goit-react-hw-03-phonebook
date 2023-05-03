import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));

    if (contactsFromStorage) {
      this.setState({ contacts: contactsFromStorage });

      if (contactsFromStorage.length === 0) {
        toast.info('No contacts in your list yet');
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  handleAddContact = contact => {
    if(this.state.contacts.some((item) => item.name === contact.name)) {
      toast.error("Contact already exists")
      return true 
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
    return false;
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  habdleFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );
  };
  render() {
    return (
      <>
        <ContactsForm addContact={this.handleAddContact} />
        <Filter
          value={this.state.filter}
          handleChange={this.handleChangeFilter}
        />
        <ContactsList
          contacts={this.habdleFilterContacts()}
          deleteContact={this.handleDeleteContact}
        />
        <Toaster/>
      </>
    );
  }
}
