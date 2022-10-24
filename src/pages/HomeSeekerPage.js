import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { useEffect, useState } from "react";
import PaginationBar from "../components/PaginationBar";
import PropertyList from "../components/PropertyList";
import { getSavedProperties } from "../services/saved-properties-service";
import { filterContacted, filterFavorite, transformSavedList } from "../utils";

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

const ContainerSection = styled.section`
  height: 100vh;
`;

const ContainerSectionInner = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function HomeseekerPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [favoriteProps, setFavoriteProps] = useState([]);
  const [contactedProps, setContactedProps] = useState([]);

  useEffect(() => {
    getSavedProperties()
      .then((saved) => {
        setFavoriteProps(transformSavedList(filterFavorite(saved)));
        setContactedProps(transformSavedList(filterContacted(saved)));
      })
      .catch(console.log);
  }, []);

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
          <ContainerSectionInner>
            <div>
              <PropertyList
                properties={!activeTab ? favoriteProps : contactedProps}
              />
            </div>
          </ContainerSectionInner>
        </ContainerSection>
      </ContainerListHomeSeeker>
    </ContainerPageHomeSeeker>
  );
}

export default HomeseekerPage;