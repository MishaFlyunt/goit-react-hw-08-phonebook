import { useDispatch } from 'react-redux';
// import Modal from 'react-modal';

// import { customStyles } from './RegistreForm.styled';
// import { useToggle } from '../../hooks/useToggle';
import { register } from 'redux/auth/operations';
import {
  Container,
  Form,
  Label,
  Input,
  Button,
  Title,
} from './RegistreForm.styled';

// Modal.setAppElement('#root');

export const RegisterForm = () => {
  // const { isModalOpen, closeModal } = useToggle();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    form.reset();
  };
  // console.log(register);

  return (
    // <Modal
    //   isOpen={isModalOpen}
    //   onRequestClose={closeModal}
    //   // style={customStyles}
    //   contentLabel="Example Modal"
    // >
    //   <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //     <label className={css.label}>
    //       Username
    //       <input type="text" name="name" />
    //     </label>
    //     <label className={css.label}>
    //       Email
    //       <input type="email" name="email" />
    //     </label>
    //     <label className={css.label}>
    //       Password
    //       <input type="password" name="password" />
    //     </label>
    //     <button type="submit">Register</button>
    //   </form>
    // </Modal>
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Registration form</Title>
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};
