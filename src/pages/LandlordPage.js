import { useState } from 'react';
import PaginationBar from '../components/PaginationBar';
import PropertyList from '../components/PropertyList';
import { colors, typography } from '../styles';
import styled from '@emotion/styled';

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

function ActiveLandlordProperties() {
  return (
    <StyledSection>
      <StyledHeading>4 Properties found</StyledHeading>
      <PropertyList length={4} />
      <PaginationBar />
    </StyledSection>
  );
}

function ClosedLandlordProperties() {
  return (
    <StyledSection>
      <StyledHeading>2 Properties found</StyledHeading>
      <PropertyList length={2} />
      <PaginationBar />
    </StyledSection>
  );
}

function LandlordPage() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledContainer>
      <StyledTabs>
        <StyledTab isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
          Active
        </StyledTab>
        <StyledTab isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
          Closed
        </StyledTab>
      </StyledTabs>
      <StyledSection>
        {activeTab ? (
          <ClosedLandlordProperties />
        ) : (
          <ActiveLandlordProperties />
        )}
      </StyledSection>
    </StyledContainer>
  );
}

export default LandlordPage;
