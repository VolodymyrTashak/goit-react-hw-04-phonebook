import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Box from './Box/Box.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Text, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContact = e => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = contact => {
    const filters = this.state.contacts.map(filter => filter.name);
    if (filters.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      contact.id = nanoid();
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const formatting = this.filterContact();
    return (
      <Box>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Text>Contacts</Text>
        <Filter filter={this.state.filter} onFilter={this.onFilter} />
        <ContactList
          formatting={formatting}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
