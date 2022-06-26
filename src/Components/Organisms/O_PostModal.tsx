import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import O_PostForm, { Props_O_PostForm } from './O_PostForm';
import A_Div, { Props_A_Div } from '../Atoms/A_Div';

const StyledDiv = styled.div``;

const theme = {
  A_Div: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 9998,
    backdropFilter: 'blur(2px)',
  },
};

export interface Props_O_PostModal {
  Props_O_PostForm: Props_O_PostForm;
  Props_A_Div: Props_A_Div;
  closeModal: any;
  initializeStateHandler: any;
}

export default function O_PostModal({
  Props_O_PostForm,
  Props_A_Div,
  closeModal,
  initializeStateHandler,
}: Props_O_PostModal) {
  useEffect(() => {
    const addEscClose = (e: any) => {
      const { key } = e;

      if (key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', addEscClose);

    return () => {
      window.removeEventListener('keydown', addEscClose);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <O_PostForm {...Props_O_PostForm} />
        <A_Div {...Props_A_Div} />
      </StyledDiv>
    </ThemeProvider>
  );
}
