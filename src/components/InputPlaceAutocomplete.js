import styled from "@emotion/styled";
import { colors } from "../styles";

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 0.5rem;
  border: 1px solid ${colors.primary[300]};
  width: ${({ width }) => width};
`;

function InputContainer({
  width,
  leftIcon,
  children
}) {
  return (
    <>
      <StyledInputContainer width={width}>
        {leftIcon}
        {children}
      </StyledInputContainer>
    </>
  );
}

export default InputContainer;
