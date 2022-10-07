import PropertyCardDetail from './PropertyCardDetail';
import styled from '@emotion/styled';

const StyledList = styled.div`
  display: grid;
  place-items: center;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  row-gap: 2rem;
`;

function PropertyList({ properties }) {
  return (
    <div>
      <p>{properties.length} Properties found</p>
      <StyledList>
        {properties.map((item) => (
          <PropertyCardDetail property={item} key={item.id} />
        ))}
      </StyledList>
    </div>
  );
}

export default PropertyList;
