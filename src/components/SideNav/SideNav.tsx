import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

import { StyledLink, NavText, NavList } from '../../styles/globalStyles';

type Props = {
  username?: string
  favourites?: string[]
  isOpen?: boolean
  toggleSideNav: () => any
};

export const SideNav: React.FC<Props> = ({ username = 'Jamie', favourites = 'london', isOpen, toggleSideNav }) => {
  return (
    <>
      <HamburgerBar onClick={toggleSideNav} />
      {isOpen &&
        <SideNavContainer>
          <CloseIcon onClick={toggleSideNav} />
          <NavUser>
            <UserText>{username}</UserText>
            <StyledLink to="/login">
              <UserText onClick={toggleSideNav}>Login</UserText>
            </StyledLink>
          </NavUser>
          <NavList>
            <StyledLink to="/">
              <NavText onClick={toggleSideNav}>Home</NavText>
            </StyledLink>
            <NavText>Search for a location</NavText>
            <NavText>Current location</NavText>
            <NavText>My favourites</NavText>
          </NavList>
        </SideNavContainer>
      }
    </>
  );
};

const SideNavContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  /* background-color: #222; */
  background-color: #3a3aa8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.2 ease-in-out;
`;

const HamburgerBar = styled(FaBars)`
  color: #fff;
  font-size: 28px;
  position: fixed;
  top: 10px;
  left: 10px;

  :hover {
    cursor: pointer;
  }
`;

// const CloseButton = styled.button`
//   width: fit-content;
//   background: none;
// `;

const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 30px;
  position: fixed;
  top: 10px;
  left: 10px;
  
  :hover {
    cursor: pointer;
  }
  
`;

const NavUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #a7a1a1; */
  width: 100%;
  padding: 10px;
  background-color: #4848cf;
`;

const UserText = styled.p`
  color: #fff;
  margin: 0 16px;
`;