// modules
import { memo, forwardRef } from 'react';
import styled from 'styled-components';

// attributes for css only
const StyledInput = styled.input`
  width: ${({ theme }) => theme.input.width};
  height: ${({ theme }) => theme.input.height};
  flex: ${({ theme }) => theme.input.flex};
  font-size: ${({ theme }) => theme.input.placeHolderFontSize};
  text-align: ${({ theme }) => theme.input.textAlign};
  &::placeholder {
    text-align: center;
  }
  box-sizing: border-box;
`;

// attributes for HTML element only
export interface Props_A_Input {
  type: string;
  placeHolder?: string;
  id: string;
  pattern?: string;
  value?: string;
  onChangeHandler?: any;
  minMax?: {
    min: string;
    max: string;
  };
  minMaxLength?: {
    minLength: number;
    maxLength: number;
  };
}

// component
function A_Input(
  {
    type,
    placeHolder,
    id,
    pattern,
    value,
    minMax,
    minMaxLength,
    onChangeHandler,
  }: Props_A_Input,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledInput
      type={type}
      placeholder={placeHolder}
      id={id}
      pattern={pattern}
      ref={ref}
      value={value}
      onChange={(event) => {
        onChangeHandler && onChangeHandler(event.target.value);
      }}
      {...minMax}
      {...minMaxLength}
    />
  );
}

export default memo(forwardRef(A_Input), (prev, curr) => {
  if (curr.value === undefined) return true;

  if (prev.value === curr.value) return true;

  return false;
});
