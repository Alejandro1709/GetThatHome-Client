import PropertyCardDetail from "./PropertyCardDetail";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { TbMoodEmpty } from "react-icons/tb";

const StyledList = styled.div`
  display: grid;
  place-items: center;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  row-gap: 2rem;
`;

const StyledNotFound = styled.div`
  height: 40rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.headline[3]}
  color: ${colors.secondary[500]};
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
      {properties.length === 0 && (
        <StyledNotFound>
          No results found
          <TbMoodEmpty size="4rem" />
        </StyledNotFound>
      )}
    </div>
  );
}

export default PropertyList;
