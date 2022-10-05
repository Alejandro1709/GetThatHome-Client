import styled from "@emotion/styled";
import Input from "./Input";
import { BiSearch } from "react-icons/bi";
import { colors, typography } from "../styles";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Container = styled.div`
  width: 600px;
`;
const SelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
  & p {
    ${typography.overline};
  }
`;
const StyledSelect = styled.select`
  width: 120px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${colors.primary[300]};
  /* width: ${({ width }) => width}; */
`;
export default function NewPropertyForm() {
  return (
    <Container>
      <h2>Create a property listing</h2>
      <Input
        label="adress"
        placeholder="start typing to autocomplete"
        width="100%"
        leftIcon={
          <BiSearch size="1.25rem" color={`${colors.secondary[500]}`} />
        }
      />
      <Input
        label="montly rent"
        leftIcon={
          <RiMoneyDollarCircleLine
            size="1.25rem"
            color={`${colors.secondary[500]}`}
          />
        }
        placeholder="200"
        width="50%"
      />
      <Input
        label="maintanance"
        leftIcon={
          <RiMoneyDollarCircleLine
            size="1.25rem"
            color={`${colors.secondary[500]}`}
          />
        }
        placeholder="100"
        width="50%"
      />
      <label>
        property type
        <input type="radio" value="apartment" name="prop_type" />
        <input type="radio" value="house" name="prop_type" />
      </label>
      <SelectWrapper>
        <div>
          <p>bedrooms</p>
          <StyledSelect>
            <option selected disabled hidden>
              Select...
            </option>
            <option value="1">1</option>
          </StyledSelect>
        </div>
        <div>
          <p>bathrooms</p>
          <StyledSelect>
            <option selected disabled hidden>
              Select...
            </option>
            <option value="1">1</option>
          </StyledSelect>
        </div>
      </SelectWrapper>
    </Container>
  );
}
