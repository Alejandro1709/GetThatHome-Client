import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { useState } from "react";
import PaginationBar from "../components/PaginationBar";
import PropertyList from "../components/PropertyList";
import { useProperties } from "../context/properties-context";

const ContainerPageHomeSeeker = styled.div`
  min-height: inherit;
`;

const ContainerListHomeSeeker = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`;

const ContainerTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: fit-content;
  margin-bottom: 1rem;
  ${typography.button}
`;

const OptionsTab = styled.button`
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

const ContainerHeading = styled.h2`
  ${typography.headline[6]}
`;

const ContainerSection = styled.section`
  height: 100vh;
`;

const ContainerSectionInner = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function ActiveHomeseekerPage({ properties }) {
  return (
    <ContainerSectionInner>
      <div>
        <ContainerHeading>7 Properties found</ContainerHeading>
        <PropertyList properties={properties} />
      </div>
      <PaginationBar />
    </ContainerSectionInner>
  );
}

function ClosedHomeseekerPage({ properties }) {
  return (
    <ContainerSectionInner>
      <div>
        <ContainerHeading>5 Properties found</ContainerHeading>
        <PropertyList properties={properties} />
      </div>
      <PaginationBar />
    </ContainerSectionInner>
  );
}

function HomeseekerPage() {
  const { properties } = useProperties();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ContainerPageHomeSeeker>
      <ContainerListHomeSeeker>
        <ContainerTabs>
          <OptionsTab
            isActive={activeTab === 0}
            onClick={() => setActiveTab(0)}
          >
            Favorites
          </OptionsTab>
          <OptionsTab
            isActive={activeTab === 1}
            onClick={() => setActiveTab(1)}
          >
            Contacted
          </OptionsTab>
        </ContainerTabs>
        <ContainerSection>
        {activeTab ? (
          <ClosedHomeseekerPage {...{ properties }} />
        ) : (
          <ActiveHomeseekerPage {...{ properties }} />
        )}
        </ContainerSection>
      </ContainerListHomeSeeker>
    </ContainerPageHomeSeeker>
  );
}

export default HomeseekerPage;
