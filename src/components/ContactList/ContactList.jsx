import { Contact, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContact = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ name, id, number }) => {
        return (
          <Contact key={id}>
            {name}: {number}
            <Button type="button" onClick={() => deleteContacts(id)}>
              Delete
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};
