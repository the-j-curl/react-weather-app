import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { SideNav } from 'components';
import { StyledLink } from '../../styles/globalStyles';

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen)
  };

  return (
    <HeaderContainer>
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <StyledLink to="/">
        <MainHeading>{title}</MainHeading>
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
