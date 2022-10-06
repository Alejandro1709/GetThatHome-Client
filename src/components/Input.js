import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 0.5rem;
  border: 1px solid ${colors.primary[300]};
  width: ${({ width }) => width};
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: ${fonts.secondary};
  ${typography.body[1]}
  &::placeholder {
    color: ${colors.secondary[500]};
  }
`;

const StyledLabel = styled.label`
  ${typography.overline}
  text-transform: uppercase;
  color: ${colors.secondary[700]};
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  width,
  leftIcon,
}) {
  return (
    <>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInputContainer width={width}>
        {leftIcon}
        <StyledInput
          type={type}
          name={name}
          id={id || name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </StyledInputContainer>
    </>
  );
}

export default Input;
