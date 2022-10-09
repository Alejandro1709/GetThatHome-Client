import styled from "@emotion/styled";
import { colors } from "../../styles";
import { fonts, typography } from "../../styles/typography";
import { boxShadow } from "../../styles/utils";

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
  & button {
    max-height: 2.25rem;
  }
`;

export const PopUpCard = styled.form`
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

export const PricePopUp = styled.div`
  position: absolute;
  top: 50px;
  left: -100px;
  z-index: 1;
`;

export const TypePopUp = styled.div`
  position: absolute;
  top: 50px;
  left: 65px;
  z-index: 1;
`;

export const BedBathPopUp = styled.div`
  position: absolute;
  top: 50px;
  right: 70px;
  z-index: 1;
`;

export const MorePopUp = styled.div`
  position: absolute;
  top: 50px;
  right: -100px;
  z-index: 1;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const InputsWrapper2 = styled.div`
  display: flex;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  & label {
    font-family: ${fonts.secondary};
    ${typography.body[2]}
    color: ${colors.secondary[600]};
  }

  & input[type="checkbox"] {
    appearance: none;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
  }

  & input[type="checkbox"]::before {
    position: absolute;
    content: "";
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid ${colors.primary[300]};
    cursor: pointer;
  }
  & input[type="checkbox"]:checked::before {
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

export const Type = styled.div`
  min-width: 3rem;
  text-align: center;
  padding: 0.5rem;
  border: 1px solid ${colors.secondary[600]};
  border-radius: ${({ position }) => {
    if (position === "left") return "0.5rem 0 0 0.5rem";
    if (position === "right") return "0 0.5rem 0.5rem 0";
    else return "";
  }};
  color: ${colors.secondary[700]};
  background-color: ${colors.secondary[200]};
  font-family: ${fonts.secondary};
  ${typography.body[2]}
  cursor: pointer;
  &.activeTypeBed,
  &.activeTypeBath {
    color: ${colors.secondary[200]};
    background-color: ${colors.primary[300]};
  }
`;

export const Dash = styled.div`
  background-color: ${colors.primary[200]};
  width: 1rem;
  height: 3px;
`;
