import styled from "@emotion/styled";
import LandingPage from "./components/LandingPage";

const StyledContainer = styled.div`
  margin: 0 auto;
  /* background-color: aqua; */
`;

function App() {
  return (
    <StyledContainer>
      <LandingPage />
    </StyledContainer>
  );
}

export default App;
