import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HearderContainer>
      <NavLink to="/">
        <MainHeading>{title}</MainHeading>
      </NavLink>
      <NavLink to="/login">
        <NavText>Login</NavText>
      </NavLink>
    </HearderContainer>
  )
}

const HearderContainer = styled.header`
  background-color: #3a3aa8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MainHeading = styled.h1`
  color: #fff;
  text-decoration: none;
`;

const NavText = styled.p`
  color: #fff;
  text-decoration: none;
`;