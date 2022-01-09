import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const NavList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
`;

export const NavText = styled.li`
  color: #fff;
  font-weight: 600;
`;
