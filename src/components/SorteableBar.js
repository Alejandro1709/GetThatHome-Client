import FilterInput from './FilterInput';
import ButtonGroup from './ButtonGroup';
import SelectInput from './SelectInput';
import styled from '@emotion/styled';

const StyledSorteableBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSorteableBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSorteableBarBot = styled.div``;

function SorteableBar() {
  return (
    <StyledSorteableBar>
      <StyledSorteableBarTop>
        <FilterInput placeholder='Search by address...' hasLeftIcon />
        <ButtonGroup />
        <SelectInput />
      </StyledSorteableBarTop>
      <StyledSorteableBarBot>24 Properties found</StyledSorteableBarBot>
    </StyledSorteableBar>
  );
}

export default SorteableBar;
