import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: rgb(32, 49, 66);
  font-size: 18px;
  font-weight: 500;
  padding: 7px;

  &.active {
    color: orange;
    background-color: rgb(220, 219, 212);
    border: 1px solid black;
    border-radius: 10px;
  }
`;

