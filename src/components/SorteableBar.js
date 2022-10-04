import FilterInput from './FilterInput';
import ButtonGroup from './ButtonGroup';
import SelectInput from './SelectInput';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import styled from '@emotion/styled';

const StyledSorteableBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const StyledSorteableBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSorteableBarBot = styled.div`
  color: ${colors.secondary[600]};
  user-select: none;
  ${typography.headline[6]}
`;

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
