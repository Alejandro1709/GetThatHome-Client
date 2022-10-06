import { BsChevronDown } from "react-icons/bs";
import Button from "./Button";
import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
import { boxShadow } from "../styles/utils";
import { fonts, typography } from "../styles/typography";
import FilterInput from "./FilterInput";

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
  & button {
    max-height: 2.25rem;
  }
`;

const PopUpCard = styled.div`
  background-color: ${colors.secondary[200]};
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  ${boxShadow[1]};
  & p {
    font-family: ${fonts.secondary};
    ${typography.overline}
    text-transform: uppercase;
    align-self: flex-start;
  }
`;

const PricePopUp = styled.div`
  position: absolute;
  top: 40px;
  left: -15px;
  z-index: 1;
`;

const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

function ButtonGroup() {
  const [priceDetails, setPriceDetails] = useState(false);

  return (
    <>
      <StyledButtonGroup>
        <Button
          onClick={() =>
            !priceDetails ? setPriceDetails(true) : setPriceDetails(false)
          }
        >
          Price
        </Button>
        {priceDetails && (
          <PricePopUp>
            <PopUpCard>
              <p>salary range</p>
              <InputsWrapper>
                <FilterInput placeholder="min" width="100px" />
                <p>—</p>
                <FilterInput placeholder="max" width="100px" />
              </InputsWrapper>
              <Button>done</Button>
            </PopUpCard>
          </PricePopUp>
        )}
        <Button>Property type</Button>
        <Button>Beds and baths</Button>
        <Button hasIcon Icon={BsChevronDown}>
          More
        </Button>
      </StyledButtonGroup>
    </>
  );
}

export default ButtonGroup;
