import styled, { ThemeProvider } from 'styled-components';
import A_Button, { Props_A_Button } from '../Atoms/A_Button';

const StyledDiv = styled.div`
  position: ${({ theme }) => theme.M_PostMenu.position};
  top: ${({ theme }) => theme.M_PostMenu.top};
  right: ${({ theme }) => theme.M_PostMenu.right};

  @media screen and (max-width: 767px) {
    position: ${({ theme }) =>
      theme.M_PostMenu.tablet && theme.M_PostMenu.tablet.position};
    grid-area: ${({ theme }) =>
      theme.M_PostMenu.tablet && theme.M_PostMenu.tablet.gridArea};
    display: flex;
  }
`;

const theme = {
  A_Button: {
    borderRadius: '0.5rem',
    fontSize: '1.2rem',
    backgroundColor: 'black',
    color: 'white',
    margin: '0 1rem 0 0',
    tablet: {
      border: '1px solid grey',
      borderRadius: '0',
      fontSize: '1.2rem',
      backgroundColor: 'black',
      color: 'white',
      margin: '0 0 0 0',
      flex: 1,
    },
  },
};

export interface Props_M_PostMenu {
  Props_A_Button_1: Props_A_Button;
  Props_A_Button_2: Props_A_Button;
  Props_A_Button_3: Props_A_Button;
}

function M_PostMenu({
  Props_A_Button_1,
  Props_A_Button_2,
  Props_A_Button_3,
}: Props_M_PostMenu) {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <A_Button {...Props_A_Button_1} />
        <A_Button {...Props_A_Button_2} />
        <A_Button {...Props_A_Button_3} />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default M_PostMenu;
