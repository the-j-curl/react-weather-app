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

export const DescriptionText = styled.p`
  margin: 6px 0;
  font-size: 20px;
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 500;
  margin: 2px 0;
`;

export const H4 = styled.h4`
  margin: 0;
`;

export const TextSmall = styled.p`
  font-size: 14px;
  margin: 0;
`;
