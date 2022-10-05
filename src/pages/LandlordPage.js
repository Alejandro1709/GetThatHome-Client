import styled from '@emotion/styled';
import PaginationBar from '../components/PaginationBar';
import PropertyList from '../components/PropertyList';
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
  margin-bottom: 1rem;
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

const StyledSection = styled.section``;

const StyledHeading = styled.h2`
  ${typography.headline[6]}
`;

function LandlordPage() {
  return (
    <StyledContainer>
      <StyledTabs>
        <StyledTab isActive={true}>Active</StyledTab>
        <StyledTab>Closed</StyledTab>
      </StyledTabs>
      <StyledSection>
        <StyledHeading>4 Properties found</StyledHeading>
        <PropertyList />
        <PaginationBar />
      </StyledSection>
    </StyledContainer>
  );
}

export default LandlordPage;
