import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface Props_M_QRcode {
  onClick: any;
}

function M_QRcode({ onClick }: Props_M_QRcode) {
  const router = useRouter();
  const url = `https://yosegaki.vercel.app/${router.query.id}`;

  useEffect(() => {
    const addEscClose = (e: any) => {
      const { key } = e;

      if (key === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', addEscClose);

    return () => {
      window.removeEventListener('keydown', addEscClose);
    };
  }, []);

  return (
    <StyledDiv
      onClick={() => {
        onClick();
      }}
    >
      <QRCodeSVG width={'50vw'} height={'50vh'} value={url} />
    </StyledDiv>
  );
}

export default M_QRcode;
