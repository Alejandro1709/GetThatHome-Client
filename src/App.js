import styled from "@emotion/styled";
import LandingPage from "./components/LandingPage";
// import LandingPage from "./components/LandingPage";
import SearchForm from "./components/SearchForm";
// import PropertyCardDetail from "./components/PropertyCardDetail";

const StyledContainer = styled.div`
  margin: auto;
`;

function App() {
  return (
    <StyledContainer>
      <LandingPage />
    </StyledContainer>
  );
}

export default App;
