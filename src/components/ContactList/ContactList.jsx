import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
 

const ContactList =() => {

   const filter = useSelector((state) => state.filters.status);
    const contacts = useSelector(state => state.contacts.items);
    const dispatch=useDispatch();

    const filteredContacts = filter ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())):contacts;

    const handleDeleteContact = (id) => {
        dispatch(removeContact(id));
      };

    return(


        <ul className={css.contactList}>
        {filteredContacts.map((listCont,index)=>(
        <li key={index} id={listCont.id} className={css.contactItem}>
            <Contact listCont={listCont} delCell={handleDeleteContact}/>
        </li>
        ))}     
    </ul>
    )
}

export default ContactList;