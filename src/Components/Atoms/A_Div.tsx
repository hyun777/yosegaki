import styled, { ThemeProvider, keyframes, css } from 'styled-components';

const spin = keyframes`
  0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
`;

const StyledDiv = styled.div`
  position: ${({ theme }) => theme.A_Div.position};
  top: ${({ theme }) => theme.A_Div.top};
  left: ${({ theme }) => theme.A_Div.left};
  width: ${({ theme }) => theme.A_Div.width};
  height: ${({ theme }) => theme.A_Div.height};
  background-color: ${({ theme }) => theme.A_Div.backgroundColor};
  z-index: ${({ theme }) => theme.A_Div.zIndex};
  backdrop-filter: ${({ theme }) => theme.A_Div.backdropFilter};
  border: ${({ theme }) => theme.A_Div.border};
  border-top: ${({ theme }) => theme.A_Div.borderTop};
  border-radius: ${({ theme }) => theme.A_Div.borderRadius};
  animation: ${({ theme }) =>
    theme.A_Div.spin
      ? css`
          ${spin} 2s infinite linear
        `
      : ''};
`;

export interface Props_A_Div {
  onClick?: any;
}

export default function A_Div({ onClick }: Props_A_Div) {
  return (
    <StyledDiv
      onClick={() => {
        onClick && onClick();
      }}
    ></StyledDiv>
  );
}
