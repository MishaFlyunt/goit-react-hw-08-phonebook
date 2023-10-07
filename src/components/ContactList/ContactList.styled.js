import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  margin-top: 15px;
`;

export const ContactItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
`;

export const ButtonStyled = styled.button`
  border-radius: 8px;
  /* padding: 5px; */
`;

export const Name = styled.p`
  width: 48%;
  background-color: rgb(182, 218, 248);
`;

export const Number = styled.p`
  /* display: flex;
  justify-content: end; */
  width: 48%;
  background-color: rgb(182, 218, 248);
`;

export const HeaderLi = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const HeaderName = styled.p`
  width: 47%;
  background-color: rgb(112, 67, 53);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`;
