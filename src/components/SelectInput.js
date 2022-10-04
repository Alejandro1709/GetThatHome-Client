import { BsChevronDown } from 'react-icons/bs';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';

const StyledInputWrapper = styled.div`
  display: inline-block;
  border: 1px solid ${colors.primary[400]};
  background-color: white;
  border-radius: 0.31rem;
  user-select: none;
`;

const StyledSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 8px;
`;

function SelectInput() {
  return (
    <StyledInputWrapper>
      <StyledSelect>
        <span>Buying and Renting</span>
        <BsChevronDown />
      </StyledSelect>
    </StyledInputWrapper>
  );
}

export default SelectInput;
