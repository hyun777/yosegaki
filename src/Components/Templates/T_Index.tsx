import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import A_H1, { Props_A_H1 } from '../Atoms/A_H1';
import A_Video, { Props_A_Video } from '../Atoms/A_Video';
import O_IndexPageForm, {
  Props_O_IndexPageForm,
} from '../Organisms/O_IndexPageForm';
import M_LoadingCircle from '../Molecules/M_LoadingCircle';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 38% 62%;
  user-select: none;

  @media screen and (max-width: 767px) {
    grid-template-rows: 50% 50%;
    min-height: -webkit-fill-available;
  }
`;

const theme = {
  A_H1: {
    gridArea: '1/1/2/2',
    fontSize: '3.5rem',
    fontWeight: 'bolder',
    placeSelf: 'center center',
    color: 'white',
    textShadow: '2px 2px 5px black;',
    animation: true,
    tablet: {
      fontSize: '2.5rem',
    },
    mobile: {
      fontSize: '2.5rem',
    },
  },
  O_IndexPageForm: {
    gridColumn: '1/2',
    gridRow: '2/3',
    placeSelf: 'start center',
    margin: '-2rem 0 0 0',
    tablet: {
      margin: '0 0 0 0',
    },
  },
  A_Video: {
    position: 'fixed',
    zIndex: '-999',
    userSelect: 'none',
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    opacity: '0.8',
  },
};

interface Props_T_Index {
  Props_O_IndexPageForm: Props_O_IndexPageForm;
  Props_A_H1: Props_A_H1;
  Props_A_Video: Props_A_Video;
}

export default forwardRef(function T_Index(
  { Props_O_IndexPageForm, Props_A_H1, Props_A_Video }: Props_T_Index,
  ref?: React.ForwardedRef<HTMLInputElement>
) {
  const { globalLoading } = useSelector((state: RootState) => state.common);

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <A_H1 {...Props_A_H1} />
        <O_IndexPageForm {...Props_O_IndexPageForm} ref={ref} />
        <A_Video {...Props_A_Video} />
        {globalLoading ? <M_LoadingCircle /> : ''}
      </StyledDiv>
    </ThemeProvider>
  );
});
