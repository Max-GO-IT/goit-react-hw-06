import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import phoneContact from "../../json/phoneContact.json";
import ContactForm from "../ContactForm/ContacnForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from './App.module.css';
import { addContact, removeContact } from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'; 

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(state => state.contacts.items);


  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts = filter
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  const handleAddContact = (name, phone) => {
    dispatch(addContact({ id: `id-${contacts.length + 1}`, name, number: phone }));
  };

  const handleDeleteContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm funAdd={handleAddContact} />
      <SearchBox filter={filter} change={handleFilterChange} />
      <ContactList listConts={filteredContacts} delCell={handleDeleteContact} />
    </div>
  );
}

export default App;

