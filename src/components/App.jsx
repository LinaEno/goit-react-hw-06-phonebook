import { ContactList } from './ContactList/ContactList';
import Form from './ContactForm/Form';
import Filter from './Filter';
import { Container, MainTitle, Title, Message } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading, selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);

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
      {loading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </Container>
  );
}
