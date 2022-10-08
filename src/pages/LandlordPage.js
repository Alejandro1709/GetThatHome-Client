import { useState } from "react";
import PaginationBar from "../components/PaginationBar";
import PropertyList from "../components/PropertyList";
import { colors, typography } from "../styles";
import styled from "@emotion/styled";
import { useProperties } from "../context/properties-context";

const StyledContainer = styled.div`
  margin-top: 2rem;
  min-height: inherit;
  max-width: 75rem;
  margin: 0 auto;
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: fit-content;
  margin-bottom: 1rem;
  margin-top: 1rem;
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

const StyledSection = styled.section`
  height: 100vh;
`;

const StyledSectionInner = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function LandlordPage() {
  const [activeTab, setActiveTab] = useState(0);
  const { closed, active } = useProperties();
  
  return (
    <StyledContainer id="styledcontainer">
      <StyledTabs>
        <StyledTab isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
          Active
        </StyledTab>
        <StyledTab isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
          Closed
        </StyledTab>
      </StyledTabs>
      <StyledSection>
        <StyledSectionInner>
          <div>
            <PropertyList
              properties={!activeTab ? active : closed}
              isLandlord={!activeTab}
            />
          </div>
          <PaginationBar />
        </StyledSectionInner>
      </StyledSection>
    </StyledContainer>
  );
}

export default LandlordPage;
