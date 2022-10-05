import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { fonts, typography } from "../styles/typography";

const StyledButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  background-color: ${colors.primary[300]};
  cursor: pointer;
  border-radius: 1rem;
  font-family: ${fonts.secondary};
  ${typography.button}
  &:hover {
    background-color: ${colors.primary[400]};
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Button({ children, hasIcon, Icon, leftIcon, onClick, style }) {
  return (
    <StyledButton onClick={onClick} style={style}>
      <StyledButtonWrapper>
        {leftIcon}
        {children}
        {hasIcon && <Icon />}
      </StyledButtonWrapper>
    </StyledButton>
  );
}

export default Button;
