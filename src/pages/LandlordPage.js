import styled from '@emotion/styled';
import { colors, typography } from '../styles';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: aqua; */
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: fit-content;
  ${typography.button}
`;

const StyledTab = styled.button`
  border: none;
  padding: 0.5rem;
  background: none;
  color: ${({ isActive }) =>
    isActive ? colors.secondary[700] : colors.secondary[500]};
  border-bottom: 2px solid
    ${({ isActive }) =>
      isActive ? colors.primary[300] : colors.secondary[500]};
  cursor: pointer;
`;

function LandlordPage() {
  return (
    <StyledContainer>
      <StyledTabs>
        <StyledTab isActive={true}>Active</StyledTab>
        <StyledTab>Closed</StyledTab>
      </StyledTabs>
    </StyledContainer>
  );
}

export default LandlordPage;
