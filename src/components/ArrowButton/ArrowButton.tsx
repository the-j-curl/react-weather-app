import React from 'react';
import styled from 'styled-components/macro';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

type Props = {
  icon: 'left' | 'right'
  handleOnClick: () => any
};

export const ArrowButton: React.FC<Props> = ({ icon, handleOnClick }) => {

  if (icon === 'left') {
    return (
      <IButton onClick={handleOnClick}>
        <MdArrowBackIos />
      </IButton>
    )
  } else {
    return (
      <IButton onClick={handleOnClick}>
        <MdArrowForwardIos />
      </IButton>
    )
  }
};

const IButton = styled.button`
  border: none;
  opacity: 0.4;
`;
