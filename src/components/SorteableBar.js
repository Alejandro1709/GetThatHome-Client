import React from 'react';
import SelectInput from './SelectInput';
import styled from '@emotion/styled';

const StyledSorteableBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSorteableBarTop = styled.div``;

const StyledSorteableBarBot = styled.div``;

function SorteableBar() {
  return (
    <StyledSorteableBar>
      <StyledSorteableBarTop>
        <SelectInput placeholder='Search by address...' hasIcon />
        {/* ButtonGroup */}
        {/* SelectInput */}
      </StyledSorteableBarTop>
      <StyledSorteableBarBot>24 Properties found</StyledSorteableBarBot>
    </StyledSorteableBar>
  );
}

export default SorteableBar;
