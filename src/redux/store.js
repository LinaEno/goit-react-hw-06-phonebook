import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
