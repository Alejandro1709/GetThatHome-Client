import styled from "@emotion/styled";
import { useEffect, useState, Fragment } from "react";
import { getProperties } from "./services/properties-service";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/property-detail-page";
import SignupPage from "./pages/SignupPage";
import NewPropertyForm from "./pages/NewPropertyPage";
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

const GOOGLE_API_TOKEN = process.env.REACT_APP_GCP_API_KEY;

const addScript = ({ src, id, onLoad }) => {
  const existing = document.getElementById(id);
  if (existing) {
    return existing;
  } else {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = () => {
      if (onLoad) {
        onLoad();
      }
    };
    document.body.appendChild(script);
    return script;
  }
};

const removeScript = ({ id }) => {
  const script = document.getElementById(id);
  if (script) {
    document.body.removeChild(script);
  }
};

removeScript({
  id: "maps-script",
});

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const script = addScript({
      src: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_TOKEN}&libraries=places`,
      id: "maps-script",
      onLoad: () => {
        setIsMapLoaded(true);
        console.log("Google Maps script loaded!");
      },
    });
    return () => removeScript({ id: script.id });
  }, []);

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
              <LoginForm />
            </Modal>
          )}
          <NavBar onLoginClick={() => setIsModalOpen(true)} />
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  onLoginClick={() => setIsModalOpen(true)}
                  isMapReady={isMapLoaded}
                />
              }
            />
            <Route path="/properties" element={<PropertiesPage />} />
            {/* For the route property detail page add the id of the property */}
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
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
