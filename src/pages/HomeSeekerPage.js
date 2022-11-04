import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { useEffect, useState } from "react";
import PropertyList from "../components/PropertyList";
import { useProperties } from "../context/properties-context";
import { filterContacted, filterFavorite, transformSavedList } from "../utils";
import { useThemeContext } from "../context/theme-context";

const ContainerPageHomeSeeker = styled.div`
  min-height: inherit;
  padding: 1rem;
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
  color: ${({ isActive, theme }) => {
    if (isActive && theme !== "Dark") return colors.secondary[700];
    if (isActive && theme === "Dark") return colors.secondary[300];
    return colors.secondary[500];
  }};
  border-bottom: 2px solid
    ${({ isActive }) =>
      isActive ? colors.primary[300] : colors.secondary[500]};
  cursor: pointer;
`;

function HomeseekerPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [favoriteProps, setFavoriteProps] = useState([]);
  const [contactedProps, setContactedProps] = useState([]);
  const { savedProps, changeReload } = useProperties();
  const { contextTheme } = useThemeContext();

  useEffect(() => {
    setFavoriteProps(transformSavedList(filterFavorite(savedProps)));
    setContactedProps(transformSavedList(filterContacted(savedProps)));
  }, [savedProps]);

  return (
    <ContainerPageHomeSeeker>
      <ContainerTabs>
        <OptionsTab
          theme={contextTheme}
          isActive={activeTab === 0}
          onClick={() => setActiveTab(0)}
        >
          Favorites
        </OptionsTab>
        <OptionsTab
          theme={contextTheme}
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          Contacted
        </OptionsTab>
      </ContainerTabs>
      <PropertyList
        properties={!activeTab ? favoriteProps : contactedProps}
        onReload={changeReload}
      />
    </ContainerPageHomeSeeker>
  );
}

export default HomeseekerPage;
