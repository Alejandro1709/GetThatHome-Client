import { BsChevronRight } from 'react-icons/bs';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  margin-top: 2.31rem;
`;

const StyledPaginationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  width: 31px;
  border-radius: 4px;
  background-color: ${({ isActive }) =>
    isActive ? colors.primary[100] : 'white'};
  color: ${colors.secondary[600]};
  cursor: pointer;
  user-select: none;
  border: 1px solid
    ${({ isActive }) => (isActive ? colors.primary[400] : '#eee')};

  &:hover {
    background-color: ${colors.primary[100]};
    border: 1px solid ${colors.primary[400]};
  }
`;

function PaginationBar() {
  return (
    <StyledPagination>
      <StyledPaginationItem isActive={true}>1</StyledPaginationItem>
      <StyledPaginationItem>2</StyledPaginationItem>
      <StyledPaginationItem>3</StyledPaginationItem>
      <StyledPaginationItem>4</StyledPaginationItem>
      <StyledPaginationItem>5</StyledPaginationItem>
      <BsChevronRight />
    </StyledPagination>
  );
}

export default PaginationBar;
