import { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import SorteableBar from '../components/SorteableBar';
import PaginationBar from '../components/PaginationBar';
import { useProperties } from '../context/properties-context';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: inherit;
`;

const PropertiesContainer = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function PropertiesPage() {
  const { propsByPreferences } = useProperties();

  const [filtered, setFiltered] = useState(propsByPreferences);

  return (
    <StyledContainer>
      <SorteableBar setFiltered={setFiltered} />
      <PropertiesContainer>
        <PropertyList properties={filtered}/>
        <PaginationBar />
      </PropertiesContainer>
    </StyledContainer>
  );
}

export default PropertiesPage;
