import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: rgb(32, 49, 66);
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  display: flex;
  align-items: center;

  &.active {
    color: rgb(200, 203, 204);
    border: 1px solid rgb(97, 229, 220);
    background-color: rgb(22, 106, 124);

    border-radius: 8px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 60px;
  /* align-items: center; */
`;
