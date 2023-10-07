import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 5px 0 5px;
`;

export const LabelStylet = styled.label`
  /* display: flex; */
`;

export const Text = styled.p`
  color: rgb(236, 234, 234);
`;

export const FieldStyled = styled(Field)`
  width: 150px;
  border-radius: 8px;
  border: 1px solid rgb(31, 51, 50);
`;

export const ButtonForm = styled.button`
  width: 120px;
  height: 35px;
  color: rgb(32, 49, 66);
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(8, 72, 121);
  color: rgb(255, 255, 255);

  padding: 2px;
  border-radius: 8px;
  border: 1px solid rgb(31, 51, 50);
  margin-Top: 15px;
`;

export const ErrorMess = styled(ErrorMessage)`
  width: 200px;
  color: red;
  font-size: 10px;
`;
