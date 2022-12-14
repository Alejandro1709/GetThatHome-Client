import { useEffect, useState } from "react";
import PropertyList from "../components/PropertyList";
import { colors, typography } from "../styles";
import styled from "@emotion/styled";
import { useProperties } from "../context/properties-context";
import { getMyProperties } from "../services/my-properties-service";

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

function LandlordPage() {
  const [activeTab, setActiveTab] = useState(0);
  const { properties } = useProperties();
  const [active, setActive] = useState(properties);
  const [closed, setClosed] = useState(properties);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getMyProperties()
      .then((data) => {
        const props = data.map((p) => p.property_details);
        const newActive = props.filter((prop) => prop.active);
        const newClosed = props.filter((prop) => !prop.active);

        setActive(newActive);
        setClosed(newClosed);
      })
      .catch(console.log);
  }, [reload]);

  function changeReload() {
    setReload(!reload);
  }

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
      <PropertyList
        properties={!activeTab ? active : closed}
        isLandlord={true}
        isActive={!activeTab}
        onCloseProperty={changeReload}
      />
    </StyledContainer>
  );
}

export default LandlordPage;
