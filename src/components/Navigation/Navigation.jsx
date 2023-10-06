import { useAuth } from 'hooks';
import { AiOutlineHome } from 'react-icons/ai';
import { Link, Nav } from './Navigation.style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">
        <AiOutlineHome size={25} />
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
