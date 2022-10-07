import PropertyList from "../components/PropertyList";
import SorteableBar from "../components/SorteableBar";
import PaginationBar from "../components/PaginationBar";
import styled from "@emotion/styled";
import { getProperties } from "../services/properties-service";
import { useEffect, useState } from "react";
import { useProperties } from "../context/properties-context";
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
};

function PropertiesPage() {
  const { properties } = useProperties();
  const [filters, setFilters] = useState(initialFilters);
  const [filtered, setFiltered] = useState(properties);
  const filteredProperties = filterProperties(properties, filters);
  console.log(properties);
  console.log(filtered);
  console.log("TOSHOWFILTERED:", filteredProperties);

  useEffect(() => {
    setFiltered(properties);
  }, []);

  return (
    <StyledContainer>
      <SorteableBar
        setFiltered={setFiltered}
        properties={[]}
        filters={filters}
        setFilters={setFilters}
      />
      <PropertiesContainer>
        <PropertyList properties={filteredProperties} />
        <PaginationBar />
      </PropertiesContainer>
    </StyledContainer>
  );
}

export default PropertiesPage;
