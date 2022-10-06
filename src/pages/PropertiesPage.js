import { useLocation } from 'react-router-dom';
import PropertyList from '../components/PropertyList';
import SorteableBar from '../components/SorteableBar';
import PaginationBar from '../components/PaginationBar';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: inherit;
`;

function PropertiesPage() {
  const location = useLocation();

  console.log(location.state);
  return (
    <StyledContainer>
      <SorteableBar />
      <PropertyList />
      <PaginationBar />
    </StyledContainer>
  );
}

export default PropertiesPage;
