import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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

  componentDidMount() {
    const persistContacts = localStorage.getItem('contacts');
    if (persistContacts) {
      this.setState({ contacts: JSON.parse(persistContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const isExist = this.state.contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} is already exist!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChangeFilter = value => {
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          handleChangeFilter={this.handleChangeFilter}
          text="Find filter by name"
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleDelete}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
