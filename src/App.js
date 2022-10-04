import styled from "@emotion/styled";
import ShowCase from "./components/ShowCase";

const StyledContainer = styled.div`
  margin: auto;
`

function App() {
  return (
    <StyledContainer>
      <ShowCase />
    </StyledContainer>
  );
}

export default App;
