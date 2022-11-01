import { useState } from "react";
import PropertyList from "../components/PropertyList";
import SorteableBar from "../components/SorteableBar";
import { useProperties } from "../context/properties-context";
import styled from "@emotion/styled";
import { filterProperties } from "../components/button-group/utils";

const StyledContainer = styled.div`
  margin: 0 auto;
  min-height: inherit;
  padding: 1rem;
`;

const initialFilters = {
  price: { min: 0, max: Infinity },
  type: { apartments: null, houses: null },
  ambients: { beds: 0, baths: 0 },
  pets: null,
  area: { min: 0, max: Infinity },
  op_type: { rent: null, sale: null },
  address: { latitude: null, longitude: null },
};

function PropertiesPage({ isMapReady }) {
  const { propsByPreferences } = useProperties();
  const [filters, setFilters] = useState(initialFilters);
  const filteredProps = filterProperties(propsByPreferences, filters);
  return (
    <StyledContainer>
      <SorteableBar
        filters={filters}
        setFilters={setFilters}
        isMapReady={isMapReady}
      />
      <PropertyList properties={filteredProps} />
    </StyledContainer>
  );
}

export default PropertiesPage;
