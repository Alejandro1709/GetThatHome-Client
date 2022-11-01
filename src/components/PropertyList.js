import PropertyCardDetail from "./PropertyCardDetail";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { TbMoodEmpty } from "react-icons/tb";
import { IoAddCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  padding: 0.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: inherit;
`;

const StyledList = styled.div`
  display: grid;
  place-items: center;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  row-gap: 4rem;
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

const StyledNewPropCard = styled.div`
  width: 18.75rem;
  height: 100%;
  border: 3px dashed ${colors.secondary[500]};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & svg {
    color: ${colors.secondary[300]};
  }
  &:hover {
    background-color: ${colors.secondary[300]};
    border: 3px dashed ${colors.primary[300]};
    & svg {
      color: ${colors.primary[300]};
    }
  }
`;

function PropertyList({ properties, isLandlord, isActive, onCloseProperty }) {
  const [page, setPage] = useState(1);
  // const maxLength = 6;
  const [maxLength, setMaxLength] = useState(6);
  const listRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const columnGap = 16;
    const rowGap = 64;
    const rows = Math.floor(
      (listRef.current.clientHeight + rowGap) /
        (cardRef.current?.clientHeight + rowGap)
    );
    const columns = Math.floor(
      (listRef.current.clientWidth + columnGap) /
        (cardRef.current?.clientWidth + columnGap)
    );
    setMaxLength(Math.max(rows * columns || 0, 6));
  }, []);

  return (
    <Wrapper>
      <div>
        <p>{properties.length} Properties found</p>
        <StyledList ref={listRef}>
          {properties
            .slice((page - 1) * maxLength, page * maxLength)
            .map((item) => {
              return (
                <div ref={cardRef} key={item.id}>
                  <PropertyCardDetail
                    property={item}
                    belongsToMe={isLandlord}
                    onCloseProperty={onCloseProperty}
                  />
                </div>
              );
            })}
          {isActive && (
            <NavLink to="/create" style={{ height: "100%" }}>
              <StyledNewPropCard>
                <IoAddCircle size="5rem" />
              </StyledNewPropCard>
            </NavLink>
          )}
        </StyledList>
      </div>
      {properties.length === 0 && (
        <StyledNotFound>
          No results found
          <TbMoodEmpty size="4rem" />
        </StyledNotFound>
      )}
      {properties.length > maxLength && (
        <PaginationBar
          totalPages={Math.ceil(properties.length / maxLength)}
          page={page}
          onChangePage={setPage}
        />
      )}
    </Wrapper>
  );
}

export default PropertyList;
