import styled, { ThemeProvider } from 'styled-components';
import { forwardRef } from 'react';
import A_Label, { Props_A_label } from '../Atoms/A_Label';
import A_Textarea, { Props_A_Textarea } from '../Atoms/A_Textarea';

export interface Props_M_LabeledTextarea {
  Props_A_label: Props_A_label;
  Props_A_Textarea: Props_A_Textarea;
}

const StyledDiv = styled.div`
  width: ${({ theme }) => theme.M_LabeledTextarea.width};
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.M_LabeledTextarea.margin};
`;

const theme = {
  label: {
    fontSize: '1.6rem',
    marginBottom: '0.5rem',
    color: 'white',
    textShadow: '2px 2px 5px black;',
  },

  textarea: {
    width: '25rem',
    height: '10rem',
  },
};

export default forwardRef(function M_LabeledTextarea(
  { Props_A_label, Props_A_Textarea }: Props_M_LabeledTextarea,
  ref?
) {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <A_Label {...Props_A_label} />
        <A_Textarea {...Props_A_Textarea} />
      </StyledDiv>
    </ThemeProvider>
  );
});
