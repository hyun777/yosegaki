import { memo } from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  position: ${({ theme }) => theme.A_Video.position};
  z-index: ${({ theme }) => theme.A_Video.zIndex};
  user-select: ${({ theme }) => theme.A_Video.userSelect};
  width: ${({ theme }) => theme.A_Video.width};
  height: ${({ theme }) => theme.A_Video.height};
  object-fit: ${({ theme }) => theme.A_Video.objectFit};
  opacity: ${({ theme }) => theme.A_Video.opacity};
`;

export interface Props_A_Video {
  src: string;
  loop: boolean;
}

function A_Video({ src, loop }: Props_A_Video) {
  return (
    <StyledVideo
      src={src}
      loop={loop}
      autoPlay={true}
      controls={false}
      muted={true}
      playsInline={true}
    ></StyledVideo>
  );
}

export default memo(A_Video, () => true);
