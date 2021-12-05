import React from 'react';
import styled from 'styled-components/macro';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  text: string
  type: ButtonType
  width?: string
  primary?: boolean
  onClickFunction: () => void
};

interface IButtonStyled {
  width: string
  primary: boolean
}

export const FormButton: React.FC<ButtonProps> = ({ text, type, width = "100px", primary = true, onClickFunction }) => {
  return (
    <Button type={type} width={width} primary onClick={onClickFunction}>
      {text}
    </Button>
  )
};

const Button = styled("button") <IButtonStyled>`
  background-color: ${props => props.primary ? '#fff' : '#3a3aa8'};
  color:${props => props.primary ? '#3a3aa8' : '#fff'};
  width: ${props => props.width};
`;
