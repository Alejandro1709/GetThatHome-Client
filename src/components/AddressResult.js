import { colors, typography } from '../styles';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';

const StyledResults = styled.div`
  position: absolute;
  bottom: -110px;
  /* padding: 4px 0; */
  background-color: white;
  width: 30%;
  height: 116px;
  ${typography.subtitle[2]};
  ${boxShadow[1]};
  overflow: scroll;
`;

const StyledResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
`;

const StyledItem = styled.li`
  padding: 8px;
  ${typography.body[2]}

  &:hover {
    background-color: ${colors.primary[100]};
  }
`;

function AddressResult({ currentFormData, onAddressChange }) {
  function handleChangeAddress(address) {
    onAddressChange({ ...currentFormData, location: address });
  }

  return (
    <StyledResults>
      {/* <span>Start typing...</span> */}
      <StyledResultsList>
        <StyledItem onClick={() => handleChangeAddress('Mount Sinai')}>
          Mount Sinai
        </StyledItem>
        <StyledItem
          onClick={() => handleChangeAddress('Mount Beatifull Vallley')}
        >
          Mount Beatifull Vallley
        </StyledItem>
        <StyledItem onClick={() => handleChangeAddress('Mount Okinawa')}>
          Mount Okinawa
        </StyledItem>
      </StyledResultsList>
    </StyledResults>
  );
}

export default AddressResult;
