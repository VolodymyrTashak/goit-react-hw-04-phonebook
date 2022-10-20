import PropTypes from 'prop-types';
import { ContactItem, ContactBtn, ContactInfo } from './ContactList.styled';
export const ContactList = ({ Filtered, onDeleteContact }) => {
  return (
    <ul>
      {Filtered.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name}</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  Filtered: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
