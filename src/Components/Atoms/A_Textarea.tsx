import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  resize: none;
  width: ${({ theme }) => theme.textarea.width};
  height: ${({ theme }) => theme.textarea.height};
  box-sizing: border-box;
`;

export interface Props_A_Textarea {
  id: string;
  onChangeHandler: any;
  value: string;
}

export default function A_Textarea({
  id,
  onChangeHandler,
  value,
}: Props_A_Textarea) {
  return (
    <StyledTextarea
      id={id}
      value={value}
      onChange={(event) => {
        onChangeHandler && onChangeHandler(event.target.value);
      }}
    ></StyledTextarea>
  );
}
