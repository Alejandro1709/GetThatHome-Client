import PropertyList from "../components/PropertyList";
import SorteableBar from "../components/SorteableBar";
import PaginationBar from "../components/PaginationBar";
import styled from "@emotion/styled";
import { getProperties } from "../services/properties-service";
import { useEffect, useState } from "react";
import { useProperties } from "../context/properties-context";

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
  const [data, setData] = useState([]);
  const { properties } = useProperties();
  console.log(useProperties());
  console.log(properties);

  // useEffect(() => {
  //   getProperties()
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //       console.log(data);
  //     })
  //     .catch(console.log);
  // }, []);

  return (
    <StyledContainer>
      <SorteableBar />
      <PropertiesContainer>
        <PropertyList properties={properties} />
        <PaginationBar />
      </PropertiesContainer>
    </StyledContainer>
  );
}

export default PropertiesPage;
