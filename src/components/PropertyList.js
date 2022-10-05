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

function PropertyList({ length = 9 }) {
  const items = Array.from({ length: length }, (_, i) => i + 1);
  return (
    <StyledList>
      {items.map((item) => (
        <PropertyCardDetail key={item} />
      ))}
    </StyledList>
  );
}

export default PropertyList;
