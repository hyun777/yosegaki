import { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import M_LabeledInput, {
  Props_M_LabeledInput,
} from '../Molecules/M_LabeledInput';
import M_LabeledTextarea, {
  Props_M_LabeledTextarea,
} from '../Molecules/M_LabeledTextarea';
import A_Button, { Props_A_Button } from '../Atoms/A_Button';

const StyledForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30rem;
  height: 24rem;
  margin-top: -10.5rem;
  margin-left: -15rem;
  background-color: black;
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  z-index: 9999;
`;

const theme = {
  M_LabeledInput: {
    margin: '0 0 1.5rem 0',
  },
  M_LabeledTextarea: {
    margin: '0 0 0.5rem 0',
  },
  A_Button: {
    width: '25rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
};

export interface Props_O_PostForm {
  Props_M_LabeledInput_1: Props_M_LabeledInput;
  Props_M_LabeledTextarea: Props_M_LabeledTextarea;
  Props_A_Button: Props_A_Button;
  submitHandler: any;
}

export default function O_PostForm({
  Props_M_LabeledInput_1,
  Props_M_LabeledTextarea,
  Props_A_Button,
  submitHandler,
}: Props_O_PostForm) {
  const inputFocus = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputFocus.current !== null) {
      inputFocus.current.focus();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();

          submitHandler && submitHandler();
        }}
      >
        <M_LabeledInput {...Props_M_LabeledInput_1} ref={inputFocus} />
        <M_LabeledTextarea {...Props_M_LabeledTextarea} />
        <A_Button {...Props_A_Button} />
      </StyledForm>
    </ThemeProvider>
  );
}
