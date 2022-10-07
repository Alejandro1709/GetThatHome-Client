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
  const { properties } = useProperties();

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const searchPreferences = JSON.parse(localStorage.getItem('preferences'));
    console.log(searchPreferences);
    console.log(properties);
    const filteredProperties = properties.filter(
      (property) =>
        property.operation_type.type === `for ${searchPreferences.wanting}` &&
        property.property_type.name.toLowerCase() ===
          searchPreferences.looking &&
        +property.address.latitude ===
          searchPreferences.location.coordinates.lat &&
        +property.address.longitude ===
          searchPreferences.location.coordinates.lng
    );
    console.log(filteredProperties);
    setFiltered(filteredProperties);
  }, [properties]);

  return (
    <StyledContainer>
      <SorteableBar setFiltered={setFiltered} />
      <PropertiesContainer>
        <PropertyList properties={filtered} />
        <PaginationBar />
      </PropertiesContainer>
    </StyledContainer>
  );
}

export default PropertiesPage;
