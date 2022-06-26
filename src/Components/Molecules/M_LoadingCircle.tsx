import styled, { ThemeProvider } from 'styled-components';
import A_Div from '../Atoms/A_Div';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  A_Div: {
    width: '5rem',
    height: '5rem',
    border: '5px solid white',
    borderRadius: '50%',
    borderTop: '5px solid transparent',
    spin: true,
  },
};

function M_LoadingCircle() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <A_Div />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default M_LoadingCircle;
