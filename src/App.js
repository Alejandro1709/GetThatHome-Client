import styled from "@emotion/styled";
import PropertyCardDetail from "./components/PropertyCardDetail";
import PropertyDetailPage from "./pages/property-detail-page";

const StyledContainer = styled.div`
  margin: auto;
`;

function App() {
  return (
    // <StyledContainer>
    //   <PropertyCardDetail />
    // </StyledContainer>
    <PropertyDetailPage />
  );
}

export default App;
