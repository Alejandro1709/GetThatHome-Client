import { BsChevronRight } from "react-icons/bs";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { useThemeContext } from "../context/theme-context";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  margin-top: 2.31rem;
  margin-bottom: 0.5rem;
`;

const StyledPaginationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  background-color: ${({ isActive }) =>
    isActive ? colors.primary[100] : colors.primary[200]};
  color: ${({ theme, isActive }) => {
    if (theme !== "Dark" && !isActive) {
      return colors.secondary[800];
    }
    if (theme === "Dark" && !isActive) {
      return colors.primary[400];
    }
  }};
  cursor: pointer;
  user-select: none;
  border: 1px solid
    ${({ isActive }) => (isActive ? colors.primary[400] : colors.primary[100])};

  &:hover {
    background-color: ${colors.primary[100]};
    border: 1px solid ${colors.primary[400]};
  }
`;

const NextBtn = styled.div`
  cursor: pointer;
`;

function PaginationBar({ totalPages, page, onChangePage }) {
  const { contextTheme } = useThemeContext();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handleClick(e) {
    onChangePage(+e.target.dataset.id);
  }

  function handleNextClick() {
    if (page >= totalPages) return;
    onChangePage(page + 1);
  }
  return (
    <StyledPagination>
      {pages.map((_e, index) => {
        const pageNumber = index + 1;
        return (
          <StyledPaginationItem
            key={index}
            data-id={pageNumber}
            isActive={page === pageNumber}
            onClick={handleClick}
            theme={contextTheme}
          >
            {pageNumber}
          </StyledPaginationItem>
        );
      })}
      <NextBtn>
        <BsChevronRight onClick={handleNextClick} />
      </NextBtn>
    </StyledPagination>
  );
}

export default PaginationBar;
