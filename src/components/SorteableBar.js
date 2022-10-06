import FilterInput from "./FilterInput";
import ButtonGroup from "./ButtonGroup";
import SelectInput from "./SelectInput";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";

const StyledSorteableBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const StyledSorteableBarTop = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 2.5rem;
`;

const StyledSorteableBarBot = styled.div`
  color: ${colors.secondary[600]};
  user-select: none;
  ${typography.headline[6]}
`;

const MagnifyingGlass = styled(AiOutlineSearch)`
  color: ${colors.secondary[500]};
  font-size: 1.2rem;
`;

function SorteableBar() {
  return (
    <StyledSorteableBarTop>
      <FilterInput
        placeholder="Search by address..."
        hasLeftIcon={<MagnifyingGlass />}
      />
      <ButtonGroup />
      <SelectInput />
    </StyledSorteableBarTop>
  );
}

export default SorteableBar;
