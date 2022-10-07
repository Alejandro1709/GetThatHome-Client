import styled from "@emotion/styled";
import { useEffect, useState, Fragment } from "react";
import { getProperties } from "./services/properties-service";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/property-detail-page";
import SignupPage from "./pages/SignupPage";
import NewPropertyForm from "./components/NewPropertyForm";
import LandlordPage from "./pages/LandlordPage";
import HomeseekerPage from "./pages/HomeSeekerPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { PropertiesProvider } from "./context/properties-context";

const MainContainer = styled.div`
  min-height: 100vh;
`;

const FooterWrapper = styled.div`
  width: 100%;
  bottom: 0;
`;

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   getProperties()
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     })
  //     .catch(console.log);
  // }, []);

  function handleCloseModal(e) {
    if (e.target.dataset.type === "modal") {
      setIsModalOpen(false);
    }
  }

  // return (
  //   <div>
  //     {data.map((prop) => (
  //       <div key={prop.id}>
  //         <p>{prop.description}</p>
  //         <p>{prop.area}</p>
  //         <img src={prop.photo_urls[0]} alt="house"></img>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <PropertiesProvider>
      <MainContainer id="maincontainer">
        <Fragment>
          {isModalOpen && (
            <Modal onModalClose={handleCloseModal}>
              <LoginForm handleCloseModal={() => setIsModalOpen(false)} />
            </Modal>
          )}
          <NavBar onLoginClick={() => setIsModalOpen(true)} />
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage onLoginClick={() => setIsModalOpen(true)} />
              }
            />
            <Route path="/properties" element={<PropertiesPage />} />
            {/* For the route property detail page add the id of the property */}
            <Route path="/properties/1" element={<PropertyDetailPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/myproperties" element={<LandlordPage />} />
            <Route path="/saved" element={<HomeseekerPage />} />
            <Route path="/create" element={<NewPropertyForm />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Fragment>
      </MainContainer>
    </PropertiesProvider>
  );
}

export default App;
