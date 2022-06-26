import styled, { ThemeProvider } from 'styled-components';
import M_PostMemo, { Props_M_PostMemo } from '../Molecules/M_PostMemo';
import { forwardRef } from 'react';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  box-sizing: border-box;
  padding: 2.5rem 5rem;
  grid-area: ${({ theme }) => theme.O_PostMain.gridArea};

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-area: ${({ theme }) => theme.O_PostMain.tablet.gridArea};

    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 2.5rem 5rem;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    grid-area: ${({ theme }) => theme.O_PostMain.mobile.gridArea};

    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 1.5rem 2.5rem;
  }

  @media screen and (max-width: 479px) {
    grid-area: ${({ theme }) => theme.O_PostMain.mobile.gridArea};

    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    padding: 1.5rem 2.5rem;
  }
`;

const EmptyMessage = styled.p`
  margin: 2.5rem 0 0 0;
  text-align: center;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
`;

const theme = {
  M_PostMemo: { animation: true },
};

export interface Props_O_PostMain {
  data: any;
  onClick: any;
}

function O_PostMain({ data, onClick }: Props_O_PostMain, ref: any) {
  const colors = [1, 2, 3, 4];

  if (data.length === 0) {
    return <EmptyMessage>寄せ書きを作成してください！</EmptyMessage>;
  }
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv ref={ref}>
        {data.map(
          (
            {
              name,
              message,
              date,
              _id,
            }: {
              name: string;
              message: string;
              date: string;
              _id: string;
            },
            index: number
          ) => {
            return (
              <M_PostMemo
                key={_id}
                {...{
                  Props_A_P_1: { text: name, sort: 'name' },
                  Props_A_P_2: {
                    text: new Date(date).toLocaleString('en-US', {
                      timeZone: 'Asia/Tokyo',
                    }),
                    sort: 'date',
                  },
                  Props_A_P_3: {
                    text: message,
                    sort: 'message',
                  },
                  bgColor: colors[index % 4],
                  id: _id,
                  onClick: onClick,
                }}
              />
            );
          }
        )}
      </StyledDiv>
    </ThemeProvider>
  );
}

export default forwardRef(O_PostMain);
