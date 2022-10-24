import { useState } from "react";
import PropertyList from "../components/PropertyList";
import SorteableBar from "../components/SorteableBar";
import PaginationBar from "../components/PaginationBar";
import { useProperties } from "../context/properties-context";
import styled from "@emotion/styled";
import { filterProperties } from "../components/button-group/utils";

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

const initialFilters = {
  price: { min: 0, max: Infinity },
  type: { apartments: null, houses: null },
  ambients: { beds: 0, baths: 0 },
  pets: null,
  area: { min: 0, max: Infinity },
  op_type: { rent: null, sale: null },
};

function PropertiesPage() {
  const { propsByPreferences } = useProperties();
  const [filters, setFilters] = useState(initialFilters);
  const filteredProps = filterProperties(propsByPreferences, filters);
  return (
    <StyledContainer>
      <SorteableBar filters={filters} setFilters={setFilters} />
      <PropertiesContainer>
        <PropertyList properties={filteredProps} />
        <PaginationBar />
      </PropertiesContainer>
    </StyledContainer>
  );
}

export default PropertiesPage;
