import FilterInput from "./FilterInput";
import SelectInput from "./SelectInput";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGroup } from "./button-group/ButtonGroup";

const StyledSorteableBarTop = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 2.5rem;
  position: relative;
`;

const MagnifyingGlass = styled(AiOutlineSearch)`
  color: ${colors.secondary[500]};
  font-size: 1.2rem;
`;

function SorteableBar({ filters, setFilters }) {
  return (
    <StyledSorteableBarTop>
      <FilterInput
        placeholder="Search by address..."
        hasLeftIcon={<MagnifyingGlass />}
      />
      <ButtonGroup filters={filters} setFilters={setFilters} />
      <SelectInput filters={filters} setFilters={setFilters} />
    </StyledSorteableBarTop>
  );
}

export default SorteableBar;
