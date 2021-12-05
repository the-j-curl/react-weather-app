import React from 'react';
import styled from 'styled-components/macro';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  )
};

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
`;
