import { memo } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.A_P.fontSize};
  margin: ${({ theme }) => theme.A_P.margin};
  word-break: break-word;

  &[data-type='name'] {
    font-weight: ${({ theme }) => theme.A_P.name.fontWeight};
  }
  &[data-type='date'] {
    font-size: ${({ theme }) => theme.A_P.date.fontSize};
  }
  &[data-type='message'] {
    line-height: ${({ theme }) => theme.A_P.message.lineHeight};
  }
`;

export interface Props_A_P {
  text: string;
  sort: string;
}

function A_P({ text, sort }: Props_A_P) {
  return <StyledP data-type={sort}>{text}</StyledP>;
}

export default A_P;
