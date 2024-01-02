import { useState } from 'react';
import { ContactFormWrapper, ButtonForm } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    number: '',
  });

  const handleChange = evt => {
    setContactInfo({ ...contactInfo, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: '', number: '' });
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={contactInfo.number}
          onChange={handleChange}
          required
        />
      </label>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </ContactFormWrapper>
  );
};
