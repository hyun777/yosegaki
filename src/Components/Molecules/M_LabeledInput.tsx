import styled, { ThemeProvider } from 'styled-components';
import { forwardRef, memo } from 'react';
import A_Label, { Props_A_label } from '../Atoms/A_Label';
import A_Input, { Props_A_Input } from '../Atoms/A_Input';

export interface Props_M_LabeledInput {
  Props_A_label: Props_A_label;
  Props_A_Input: Props_A_Input;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.M_LabeledInput.margin};
`;

const theme = {
  label: {
    fontSize: '1.6rem',
    marginBottom: '0.5rem',
    color: 'white',
    textShadow: '2px 2px 5px black;',
  },

  input: {
    height: '2.3rem',
    placeHolderFontSize: '1.2rem',
    textAlign: 'center',
    width: '25rem',
  },
};

function M_LabeledInput(
  { Props_A_label, Props_A_Input }: Props_M_LabeledInput,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <A_Label {...Props_A_label} />
        <A_Input {...Props_A_Input} ref={ref} />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default memo(forwardRef(M_LabeledInput), (prev, curr) => {
  if (curr.Props_A_Input.value === undefined) return true;

  if (prev.Props_A_Input.value === curr.Props_A_Input.value) return true;

  return false;
});
