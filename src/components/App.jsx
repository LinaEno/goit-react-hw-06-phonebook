import { ContactList } from './ContactList/ContactList';
import Form from './ContactForm/Form';
import Filter from './Filter';
import { Container, MainTitle, Title, Message } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <Form />
      <Title>Contacts</Title>
      {contacts.length === 0 ? (
        <Message>There is no contacts</Message>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
}
