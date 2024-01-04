import { useState } from 'react';
import { ContactFormWrapper, ButtonForm } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </ContactFormWrapper>
  );
};
