import styled from "@emotion/styled";
import { useEffect, useState, Fragment } from "react";
import { getProperties } from "./services/property-services";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/property-detail-page";
import SignupPage from "./pages/SignupPage";
import LandlordPage from "./pages/LandlordPage";
import HomeseekerPage from "./pages/HomeSeekerPage";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   getProperties().then(setData).catch(console.log);
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
    <Fragment>
      {isModalOpen && (
        <Modal onModalClose={handleCloseModal}>
          <LoginForm />
        </Modal>
      )}
      <Routes>
        <Route
          path="/"
          element={<LandingPage onLoginClick={() => setIsModalOpen(true)} />}
        />
        <Route path="/properties" element={<PropertiesPage />} />
        {/* For the route property detail page add the id of the property */}
        <Route path="/properties/1" element={<PropertyDetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/myproperties" element={<LandlordPage />} />
        <Route path="/saved" element={<HomeseekerPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Fragment>
  );
}

export default App;
