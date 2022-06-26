import { memo } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.label.fontSize};
  margin-bottom: ${({ theme }) => theme.label.marginBottom};
  color: ${({ theme }) => theme.label.color};
  text-shadow: ${({ theme }) => theme.label.textShadow};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export interface Props_A_label {
  text: string;
  htmlFor?: string;
}

function A_Label({ text, htmlFor }: Props_A_label) {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
}

export default memo(A_Label);
