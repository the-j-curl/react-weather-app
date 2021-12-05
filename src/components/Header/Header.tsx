import React from 'react';
import styled from 'styled-components/macro'

type HeaderProps = {
  title: string
  logoSrc?: string
}

export const Header: React.FC<HeaderProps> = ({ title, logoSrc }) => {
  return (
    <HearderContainer>
      <h1>{title}</h1>
      <p>Login</p>
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