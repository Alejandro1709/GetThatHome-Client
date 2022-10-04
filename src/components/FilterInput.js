import { AiOutlineSearch } from 'react-icons/ai';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';

const StyledInputWrapper = styled.div`
  display: inline-block;
  border: 1px solid ${colors.primary[400]};
  background-color: white;
  border-radius: 0.31rem;
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.31rem;
  padding: 0.5rem 0.62rem;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.secondary[500]};
  }
`;

const MagnifyingGlass = styled(AiOutlineSearch)`
  color: ${colors.secondary[500]};
  font-size: 1.2rem;
`;

function FilterInput({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  hasLeftIcon,
}) {
  return (
    <StyledInputWrapper>
      <StyledTop>
        {hasLeftIcon && <MagnifyingGlass />}
        <StyledInput
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </StyledTop>
    </StyledInputWrapper>
  );
}

export default FilterInput;
