import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import {
  ContactListStyled,
  ContactItemStyled,
  ButtonStyled,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  console.log(contacts);
  // console.log(selectVisibleContacts);
  // const getContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().trim().includes(filter.toLowerCase())
  // );

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyled
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ButtonStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
