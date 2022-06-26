import styled, { keyframes, css } from 'styled-components';
import { memo } from 'react';

const fadeAway = keyframes`
  0% {
    opacity : 0.4
  }

  100% {
    opacity: 1
  }
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.A_H1.fontSize};
  font-weight: ${({ theme }) => theme.A_H1.fontWeight};
  margin: ${({ theme }) => theme.A_H1.margin};
  grid-area: ${({ theme }) => theme.A_H1.gridArea};
  place-self: ${({ theme }) => theme.A_H1.placeSelf};
  color: ${({ theme }) => theme.A_H1.color};
  text-shadow: ${({ theme }) => theme.A_H1.textShadow};
  animation: ${({ theme }) =>
    theme.A_H1.animation
      ? css`
          ${fadeAway} 2s infinite alternate-reverse
        `
      : ''};

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: ${({ theme }) =>
      theme.A_H1.tablet && theme.A_H1.tablet.fontSize};
  }

  @media screen and (max-width: 479px) {
    font-size: ${({ theme }) =>
      theme.A_H1.mobile && theme.A_H1.mobile.fontSize};
  }
`;

export interface Props_A_H1 {
  text: string;
}

function A_H1({ text }: Props_A_H1) {
  return <StyledH1>{text}</StyledH1>;
}

export default memo(A_H1);
