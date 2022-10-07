import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

  const [filtered, setFiltered] = useState(properties);

  const location = useLocation();

  function handleFilterProperties() {
    const locationState = location.state;

    if (locationState) {
      const filteredProperties = properties.filter((property) => {
        return (
          property.operation_type.type === locationState.wanting &&
          property.property_type.name === locationState.looking
        );
      });
      setFiltered(filteredProperties);
    }
  }

  useEffect(() => {
    handleFilterProperties();
  }, []);

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
