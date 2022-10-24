import { colors } from '../styles/colors';
import styled from '@emotion/styled';
import { fonts } from '../styles/typography';

const StyledInputWrapper = styled.form`
  border: 1px solid ${colors.primary[400]};
  background-color: white;
  border-radius: 0.31rem;
  font-family: ${fonts.secondary};
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 0.6rem;
`;

const StyledInput = styled.input`
  max-width: ${({ width }) => width};
  border: none;
  outline: none;
  &::placeholder {
    color: ${colors.secondary[500]};
  }
`;

function FilterInput({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onSubmit,
  hasLeftIcon,
  width,
}) {
  return (
    <StyledInputWrapper onSubmit={onSubmit}>
      <StyledTop>
        {hasLeftIcon}
        <StyledInput
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          width={width}
        />
      </StyledTop>
    </StyledInputWrapper>
  );
}

export default FilterInput;
