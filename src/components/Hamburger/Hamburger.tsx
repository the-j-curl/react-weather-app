import { useState } from 'react';
import styled from 'styled-components';

const size = 200;
const barHeight = size / 10;
const borderRadius = size / 10;
const barMove = size / 4;
const transition = '0.4s';

// interface ButtonProps {
//   size: string
//   barHeight: number
//   borderRadius: number
// }

// interface BarProps {
//   isOpen: boolean
//   isFirst: boolean
//   barMove: string
//   borderRadius: number
// }

type Props = {
  size?: number
  barHeight?: number
  borderRadius?: number
  isOpen?: boolean
  isFirst?: boolean
  barMove?: number
}

export const Hamburger: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledButton
      borderRadius={borderRadius}
      barHeight={barHeight}
      size={size}
      onClick={() => setIsOpen(!isOpen)}
    >
      <StyledBar isFirst isOpen={isOpen} barMove={barMove} />
      <StyledMiddleBar>
        <StyledFloatingBar isFirst isOpen={isOpen} />
        <StyledFloatingBar isOpen={isOpen} />
      </StyledMiddleBar>
      <StyledBar isOpen={isOpen} barMove={barMove} />
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  padding: 1rem 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  & span {
    height: ${p => p.barHeight}px;
    border-radius: ${p => p.borderRadius}px;
  }
`;

// const normalBar = css<ButtonProps>`
//   display: block;
//   width: 100%;
//   border-radius: ${p => p.borderRadius};
//   background: #eee;
//   transition-property: opacity, transform;
//   transition-duration: ${transition};
// `;

const StyledBar = styled.span<Props>`
  display: block;
  width: 100%;
  border-radius: ${p => p.borderRadius};
  background: #eee;
  transition-property: opacity, transform;
  transition-duration: ${transition};
  opacity: ${p => (p.isOpen ? 0 : 1)};
  transform: translateY(
    ${p =>
    p.isOpen ? p.isFirst ? '50px' : '-50px' : 0}
  );
`;

const StyledFloatingBar = styled.span<Props>`
  display: block;
  width: 100%;
  border-radius: ${p => p.borderRadius};
  background: #eee;
  transition-property: opacity, transform;
  transition-duration: ${transition};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  transition: transform ${transition};
  transform-origin: 50%;
  transform: rotate(
    ${p => (p.isOpen ? (p.isFirst ? '-45deg' : '45deg') : 0)}
  );
`;

const StyledMiddleBar = styled.span`
  display: block;
  position: relative;
`;
