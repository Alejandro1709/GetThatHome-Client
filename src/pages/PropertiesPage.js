import PropertyList from '../components/PropertyList';
import SorteableBar from '../components/SorteableBar';
import PaginationBar from '../components/PaginationBar';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: aqua; */
`;

function PropertiesPage() {
  return (
    <StyledContainer>
      <SorteableBar />
      <PropertyList />
      <PaginationBar />
    </StyledContainer>
  );
}

export default PropertiesPage;
