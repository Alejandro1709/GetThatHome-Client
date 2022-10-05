import { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Modal from './components/Modal';
import LoginForm from './components/LoginForm';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/property-detail-page';
import SignupPage from './pages/SignupPage';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  margin: 0 auto;
  /* background-color: aqua; */
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal(e) {
    if (e.target.dataset.type === 'modal') {
      setIsModalOpen(false);
    }
  }

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onModalClose={handleCloseModal}>
          <LoginForm />
        </Modal>
      )}
      <Routes>
        <Route
          path='/'
          element={<LandingPage onLoginClick={() => setIsModalOpen(true)} />}
        />
        <Route path='/properties' element={<PropertiesPage />} />
        {/* For the route property detail page add the id of the property */}
        <Route path='/properties/1' element={<PropertyDetailPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route
          path='/myproperties'
          element={<h1>Landlord Properties Page</h1>}
        />
        <Route path='/saved' element={<h1>Homeseeker Properties Page</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Fragment>
  );
}

export default App;
