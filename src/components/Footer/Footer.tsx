import React from 'react';
import styled from 'styled-components/macro';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Created by Jamie Cook</p>
    </FooterContainer>
  )
};

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
