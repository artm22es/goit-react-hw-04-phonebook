import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts-storage');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts-storage', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.find(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already exist!`);
      return;
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleChangeFilter = value => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        handleChangeFilter={handleChangeFilter}
        text="Find filter by name"
      />
      <ContactList contacts={filteredContacts} deleteContact={handleDelete} />
      <GlobalStyle />
    </Layout>
  );
};
