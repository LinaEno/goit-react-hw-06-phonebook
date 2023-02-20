import { Contact, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContact = useSelector(selectFilter);
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
