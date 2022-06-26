import { forwardRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import A_Button, { Props_A_Button } from '../Atoms/A_Button';
import M_LabeledInput, {
  Props_M_LabeledInput,
} from '../Molecules/M_LabeledInput';

const theme = {
  A_Button: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.5rem',
  },
  M_LabeledInput: {
    margin: '0 0 2rem 0',
    width: '40rem',
  },
};

const StyledForm = styled.form`
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin: ${({ theme }) => theme.O_IndexPageForm.margin};
  grid-column: ${({ theme }) => theme.O_IndexPageForm.gridColumn};
  grid-row: ${({ theme }) => theme.O_IndexPageForm.gridRow};
  place-self: ${({ theme }) => theme.O_IndexPageForm.placeSelf};

  @media screen and (min-width: 480px) and (max-width: 767px) {
    margin: ${({ theme }) =>
      theme.O_IndexPageForm.tablet && theme.O_IndexPageForm.tablet.margin};
  }
`;

export interface Props_O_IndexPageForm {
  Props_M_LabeledInput_1: Props_M_LabeledInput;

  Props_M_LabeledInput_2: Props_M_LabeledInput;

  Props_M_LabeledInput_3: Props_M_LabeledInput;

  Props_A_Button: Props_A_Button;

  submitHandler: () => void;
}

export default forwardRef(function O_IndexPageForm(
  {
    Props_M_LabeledInput_1,
    Props_M_LabeledInput_2,
    Props_M_LabeledInput_3,
    Props_A_Button,
    submitHandler,
  }: Props_O_IndexPageForm,
  ref?: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <ThemeProvider theme={theme}>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        <M_LabeledInput {...Props_M_LabeledInput_1} ref={ref} />
        <M_LabeledInput {...Props_M_LabeledInput_2} />
        <M_LabeledInput {...Props_M_LabeledInput_3} />
        <A_Button {...Props_A_Button} />
      </StyledForm>
    </ThemeProvider>
  );
});
