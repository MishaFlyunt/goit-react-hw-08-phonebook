import { useSelector, useDispatch } from 'react-redux';
import { AiTwotoneDelete } from 'react-icons/ai';

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
  Name,
  Number,
  HeaderLi,
  HeaderName,
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
      <HeaderLi>
        <HeaderName>Name</HeaderName>
        <HeaderName>Number</HeaderName>
      </HeaderLi>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <ButtonStyled
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <AiTwotoneDelete size={20} color={'rgb(112, 67, 53)'} />
          </ButtonStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
