import { memo } from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.A_Button.color};
  background-color: ${({ theme }) => theme.A_Button.backgroundColor};
  border-radius: ${({ theme }) => theme.A_Button.borderRadius};
  grid-area: ${({ theme }) => theme.A_Button.gridArea};
  transition: ${({ theme }) => theme.A_Button.transition};
  width: ${({ theme }) => theme.A_Button.width};
  font-size: ${({ theme }) => theme.A_Button.fontSize};
  margin: ${({ theme }) => theme.A_Button.margin};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background-color: grey;
    opacity: 0.7;
  }

  &:disabled:hover,
  &:disabled:active {
    opacity: 0.7;
  }

  @media screen and (max-width: 767px) {
    grid-area: ${({ theme }) =>
      theme.A_Button.tablet && theme.A_Button.tablet.gridArea};
    border: ${({ theme }) =>
      theme.A_Button.tablet && theme.A_Button.tablet.border};
    border-radius: ${({ theme }) =>
      theme.A_Button.tablet && theme.A_Button.tablet.borderRadius};
    margin: ${({ theme }) =>
      theme.A_Button.tablet && theme.A_Button.tablet.margin};
    flex: ${({ theme }) => theme.A_Button.tablet && theme.A_Button.tablet.flex};
  }
`;

export interface Props_A_Button {
  disabled?: boolean;
  value: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
}

function A_Button({ disabled = false, value, type, onClick }: Props_A_Button) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {value}
    </StyledButton>
  );
}

export default memo(A_Button);
