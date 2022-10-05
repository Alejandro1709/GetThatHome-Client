import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import { getProperties } from "./services/property-services";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProperties().then(setData).catch(console.log);
  }, []);

  return (
    <div>
      {data.map((prop) => (
        <div key={prop.id}>
          <p>{prop.description}</p>
          <p>{prop.area}</p>
          <img src={prop.photo_urls[0]} alt="house"></img>
        </div>
      ))}
    </div>
  );
  // return (
  //   <StyledContainer>
  //     <LandingPage />
  //   </StyledContainer>
  // );
}

export default App;
