import { memo } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import A_P, { Props_A_P } from '../Atoms/A_P';
import A_Div, { Props_A_Div } from '../Atoms/A_Div';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';

const shake = keyframes`
  0% {
    transform : translateX(-2px)
  }

  100% {
    transform : translateX(2px)
    
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem 1rem;
  box-sizing: border-box;
  height: fit-content;

  &[data-mode='edit'] {
    animation: ${shake} 1s infinite linear alternate-reverse;
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
  }

  &[data-bgcolor='1'] {
    background-color: #fbf4d7;
  }

  &[data-bgcolor='2'] {
    background-color: #e6f4f1;
  }

  &[data-bgcolor='3'] {
    background-color: #fed8f5;
  }

  &[data-bgcolor='4'] {
    background-color: #d6daff;
  }
`;

const theme = {
  A_P: {
    fontSize: '1.4rem',
    name: {
      fontWeight: 'bolder',
    },
    date: {
      fontSize: '1.1rem',
    },
    message: {
      lineHeight: '1.4',
    },
    margin: '0 0 1rem 0',
  },
};

export interface Props_M_PostMemo {
  Props_A_P_1: Props_A_P;
  Props_A_P_2: Props_A_P;
  Props_A_P_3: Props_A_P;
  bgColor: number;
  onClick?: any;
  id: string;
}

function M_PostMemo({
  Props_A_P_1,
  Props_A_P_2,
  Props_A_P_3,
  bgColor,
  onClick,
  id,
}: Props_M_PostMemo) {
  let { mode } = useSelector((state: RootState) => {
    return state.postPage;
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv
        data-bgcolor={bgColor}
        data-mode={mode}
        onClick={() => {
          onClick && mode === 'edit' && onClick(id);
        }}
      >
        <A_P {...Props_A_P_1} />
        <A_P {...Props_A_P_2} />
        <A_P {...Props_A_P_3} />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default memo(M_PostMemo, function (prev, curr) {
  return true;
});
