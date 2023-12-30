import { ContactListWrapper, ButtonDelete } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListWrapper>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => deleteContact(contact.id)}>
            Delete
          </ButtonDelete>
        </li>
      ))}
    </ContactListWrapper>
  );
};
