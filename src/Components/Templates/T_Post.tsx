import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import styled, { ThemeProvider } from 'styled-components';
import A_Button, { Props_A_Button } from '../Atoms/A_Button';
import A_H1, { Props_A_H1 } from '../Atoms/A_H1';
import M_PostMenu, { Props_M_PostMenu } from '../Molecules/M_PostMenu';
import O_PostModal, { Props_O_PostModal } from '../Organisms/O_PostModal';
import O_PostMain, { Props_O_PostMain } from '../Organisms/O_PostMain';
import M_LoadingCircle from '../Molecules/M_LoadingCircle';

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 5rem 2.5rem 1fr;
  user-select: none;

  @media screen and (max-width: 767px) {
    grid-template-rows: 5rem 2.5rem 2.5rem 1fr;
  }
`;

const theme = {
  A_H1: {
    gridArea: '1/1/2/2',
    fontSize: '1.8rem',
    fontWeight: 'bolder',
    placeSelf: 'center',
    tablet: {
      fontSize: '1.5rem',
    },
    mobile: {
      fontSize: '1.3rem',
    },
  },
  O_PostMain: {
    gridArea: '3/1/4/2',
    placeSelf: 'center',
    tablet: {
      gridArea: '4/1/5/2',
    },
    mobile: {
      gridArea: '4/1/5/2',
    },
  },
  M_PostMenu: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    tablet: {
      position: 'static',
      gridArea: '2/1/3/2',
    },
  },
  A_Button: {
    color: 'white',
    backgroundColor: 'black',
    gridArea: '2/1/3/2',
    transition: '0.2s',
    tablet: {
      position: 'static',
      gridArea: '3/1/4/2',
    },
  },
};

interface Props_T_Post {
  Props_A_H1: Props_A_H1;
  Props_A_Button: Props_A_Button;
  Props_O_PostMain: Props_O_PostMain;
  Props_M_PostMenu: Props_M_PostMenu;
  Props_O_PostModal: Props_O_PostModal;
}

export default forwardRef(function T_Post(
  {
    Props_A_H1,
    Props_M_PostMenu,
    Props_O_PostMain,
    Props_A_Button,
    Props_O_PostModal,
  }: Props_T_Post,
  ref
) {
  const { togglePostModal } = useSelector((state: RootState) => state.postPage);
  const { globalLoading } = useSelector((state: RootState) => state.common);

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <A_H1 {...Props_A_H1} />
        <O_PostMain {...Props_O_PostMain} ref={ref} />
        <M_PostMenu {...Props_M_PostMenu} />
        <A_Button {...Props_A_Button} />
        {togglePostModal ? <O_PostModal {...Props_O_PostModal} /> : ''}
        {globalLoading ? <M_LoadingCircle /> : ''}
      </StyledDiv>
    </ThemeProvider>
  );
});
