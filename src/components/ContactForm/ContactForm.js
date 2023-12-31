// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import toast from 'react-hot-toast';

import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import {
  FormStyled,
  LabelStylet,
  FieldStyled,
  ButtonForm,
  ErrorMess,
  Text,
} from './Form.styled';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(
      1,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
    )
    .required('Please enter a name'),
  number: Yup.string()
    .min(
      7,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter the number'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // console.log(contacts);
  const handleSubmit = (values, actions) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() ===
            values.name.toLowerCase().trim() ||
          contact.number.trim() === values.number.trim()
      )
    ) {
      return toast.error('A contact with that name or number already exists');
    }
    dispatch(addContact({ ...values }));
    actions.resetForm();
    toast.success('Contact added successfully', {
      duration: 3000,
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <LabelStylet>
          <Text>Name</Text>
          <FieldStyled type="text" name="name" />
          <ErrorMess name="name" component="div" />
        </LabelStylet>

        <LabelStylet>
          <Text>Number</Text>
          <FieldStyled type="tel" name="number" />
          <ErrorMess name="number" component="div" />
        </LabelStylet>

        <ButtonForm type="submit">Create contact</ButtonForm>
      </FormStyled>
    </Formik>
  );
};
