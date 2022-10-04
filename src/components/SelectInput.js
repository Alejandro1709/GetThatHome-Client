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
  /* border-bottom: 1px solid ${colors.primary[400]}; */
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

// const StyledBot = styled.div``;

// const StyledResults = styled.ul`
//   padding: 0;
//   margin: 0.25rem 0;
//   list-style: none;
//   max-height: 7.25rem;
//   overflow: scroll;
// `;

// const StyledListItem = styled.li`
//   padding: 0.5rem;
//   color: ${colors.secondary[600]};
//   cursor: pointer;
//   ${typography.body[400]}
//   &:hover {
//     background-color: ${colors.primary[100]};
//   }
// `;

function SelectInput({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  hasIcon,
}) {
  return (
    <StyledInputWrapper>
      <StyledTop>
        {hasIcon && <MagnifyingGlass />}
        <StyledInput
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </StyledTop>
      {/* <StyledBot>
        <StyledResults>
          <StyledListItem>Mountain Simeone</StyledListItem>
          <StyledListItem>Mountain Samaniego</StyledListItem>
          <StyledListItem>Montain Sumirilla</StyledListItem>
        </StyledResults>
      </StyledBot> */}
    </StyledInputWrapper>
  );
}

export default SelectInput;
