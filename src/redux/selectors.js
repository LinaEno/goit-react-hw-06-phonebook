export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
