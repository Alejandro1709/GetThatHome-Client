import PropertyList from "../components/PropertyList";
import SorteableBar from "../components/SorteableBar";
import PaginationBar from "../components/PaginationBar";
import styled from "@emotion/styled";
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
  op_type: { rent: null, sale: null },
};

function PropertiesPage() {
  const { properties } = useProperties();
  const [filters, setFilters] = useState(initialFilters);
  const filteredProps = filterProperties(properties, filters);

  const [filtered, setFiltered] = useState([]);

  // useEffect(() => {
  //   const searchPreferences = JSON.parse(localStorage.getItem("preferences"));
  //   console.log(searchPreferences);
  //   console.log(properties);
  //   const filteredProperties = properties.filter(
  //     (property) =>
  //       property.operation_type.type === `for ${searchPreferences.wanting}` &&
  //       property.property_type.name.toLowerCase() ===
  //         searchPreferences.looking &&
  //       +property.address.latitude ===
  //         searchPreferences.location.coordinates.lat &&
  //       +property.address.longitude ===
  //         searchPreferences.location.coordinates.lng
  //   );
  //   console.log(filteredProperties);
  //   setFiltered(filteredProperties);
  // }, [properties]);

  return (
    <StyledContainer>
      <SorteableBar filters={filters} setFilters={setFilters} />
      <PropertiesContainer>
        {/* <PropertyList properties={filtered} /> */}
        <PropertyList properties={filteredProps} />
        <PaginationBar />
      </PropertiesContainer>
    </StyledContainer>
  );
}

export default PropertiesPage;
