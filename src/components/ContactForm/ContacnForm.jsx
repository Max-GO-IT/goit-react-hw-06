
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

const validationSchema = yup.object({
  name: yup.string().required('Name is required').min(3).max(50),
  number: yup.string().required('Number is required').min(3).max(50),
});

const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleAddContact = (name, phone) => {
    dispatch(addContact({ id: `id-${contacts.length + 1}`, name, number: phone }));
  };


  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values.name, values.number);
    resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
