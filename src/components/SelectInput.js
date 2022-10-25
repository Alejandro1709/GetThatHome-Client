import { BsChevronDown } from "react-icons/bs";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { useState } from "react";
import { fonts, typography } from "../styles/typography";

const StyledInputWrapper = styled.div`
  border: 1px solid ${colors.primary[400]};
  background-color: white;
  border-radius: 0.31rem;
  user-select: none;
  cursor: pointer;
`;

const StyledSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 8px;
`;

const OptsBox = styled.div`
  position: absolute;
  width: 12.5rem;
  top: 2.7rem;
  right: 0rem;
  background-color: ${colors.secondary[300]};
  border: 1px solid ${colors.primary[400]};
  z-index: 1;
`;

const Opt = styled.div`
  padding: 0.5rem;
  &:hover {
    background-color: ${colors.primary[100]};
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  & label {
    font-family: ${fonts.secondary};
    ${typography.body[2]}
    color: ${colors.secondary[600]};
  }
  & input[type="radio"] {
    appearance: none;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
  }
  & input[type="radio"]::before {
    position: absolute;
    content: "";
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid ${colors.primary[300]};
    cursor: pointer;
  }
  & input[type="radio"]:checked::before {
    position: absolute;
    content: "\u2714";
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    color: ${colors.secondary[200]};
    background-color: ${colors.primary[300]};
    border: 1px solid ${colors.primary[300]};
  }
`;

function SelectInput({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  const sortType = (e) => {
    const value = e.target.getAttribute("value");
    let onlyRent = null,
      onlySale = null;
    if (value === "both") {
      onlyRent = true;
      onlySale = true;
    }
    if (value === "buy") {
      onlySale = true;
    }
    if (value === "rent") {
      onlyRent = true;
    }
    setFilters({ ...filters, op_type: { rent: onlyRent, sale: onlySale } });
  };

  return (
    <>
      <StyledInputWrapper
        onClick={() => (!open ? setOpen(true) : setOpen(false))}
      >
        <StyledSelect>
          <span>Buying and Renting</span>
          <BsChevronDown />
        </StyledSelect>
      </StyledInputWrapper>
      {open && (
        <OptsBox>
          <Opt>
            <CheckboxWrapper onClick={sortType} value="both">
              <input type="radio" value="both" id="both" name="type" />
              <label htmlFor="both">Both</label>
            </CheckboxWrapper>
          </Opt>
          <Opt>
            <CheckboxWrapper onClick={sortType} value="buy">
              <input type="radio" value="buy" id="buy" name="type" />
              <label htmlFor="buy">Buying</label>
            </CheckboxWrapper>
          </Opt>
          <Opt>
            <CheckboxWrapper onClick={sortType} value="rent">
              <input type="radio" value="rent" id="rent" name="type" />
              <label htmlFor="rent">Renting</label>
            </CheckboxWrapper>
          </Opt>
        </OptsBox>
      )}
    </>
  );
}

export default SelectInput;
