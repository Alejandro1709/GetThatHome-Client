import styled from "@emotion/styled";
import PropertyCardDetail from "./components/PropertyCardDetail";

const StyledContainer = styled.div`
  margin: auto;
`;

function App() {
  return (
    <StyledContainer>
      <PropertyCardDetail />
    </StyledContainer>
  );
}

export default App;
