import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <MainHeading>{title}</MainHeading>
      </StyledLink>
      <StyledLink to="/login">
        <NavText>Login</NavText>
      </StyledLink>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: #3a3aa8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MainHeading = styled.h1`
  color: #fff;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const NavText = styled.p`
  color: #fff;
`;