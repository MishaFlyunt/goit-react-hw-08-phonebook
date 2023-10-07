import { Link } from './AuthNav.style';
// import { useToggle } from '../../hooks/useToggle';

export const AuthNav = () => {
  // const { openModal } = useToggle();

  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

// onClick = { openModal };
