import { useEffect } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { colors } from "../../styles";
import Button from "../Button";
import FilterInput from "../FilterInput";
import * as styled from "./ui";

export function PricePopUp({ onSubmit }) {
  return (
    <styled.Popup>
      <styled.PopUpCard onSubmit={onSubmit}>
        <p>Price range</p>
        <styled.InputsWrapper>
          <FilterInput
            placeholder="min"
            width="100px"
            name="min_price"
            hasLeftIcon={
              <RiMoneyDollarCircleLine
                size="1.25rem"
                color={`${colors.secondary[500]}`}
              />
            }
          />
          <styled.Dash />
          <FilterInput
            placeholder="max"
            width="100px"
            name="max_price"
            hasLeftIcon={
              <RiMoneyDollarCircleLine
                size="1.25rem"
                color={`${colors.secondary[500]}`}
              />
            }
          />
        </styled.InputsWrapper>
        <Button type="submit">done</Button>
      </styled.PopUpCard>
    </styled.Popup>
  );
}

export function TypePopUp({ onSubmit, type }) {
  const checkedHouses = () => {
    return type === "houses" ? true : false;
  };
  const checkedApartments = () => {
    return type === "apartments" ? true : false;
  };
  return (
    <styled.Popup>
      <styled.PopUpCard onSubmit={onSubmit} id="typeForm">
        <p>property type</p>
        <styled.InputsWrapper>
          <styled.CheckboxWrapper>
            <input
              type="checkbox"
              value="houses"
              id="houses"
              defaultChecked={checkedHouses()}
            />
            <label htmlFor="houses">Houses</label>
          </styled.CheckboxWrapper>
          <styled.CheckboxWrapper>
            <input
              type="checkbox"
              value="apartments"
              id="apartments"
              defaultChecked={checkedApartments()}
            />
            <label htmlFor="apartments">Apartments</label>
          </styled.CheckboxWrapper>
        </styled.InputsWrapper>
        <Button type="submit">done</Button>
      </styled.PopUpCard>
    </styled.Popup>
  );
}

export function BedBathPopUp({ onSubmit, bedbathValue }) {
  useEffect(() => {
    bedbathActive(bedbathValue);
  }, [bedbathValue]);

  const bedbathActive = (bedbathValue) => {
    const bedOpts = document.getElementById("bedOpts");
    const bathOpts = document.getElementById("bathOpts");
    if (!bedbathValue || !bedOpts || !bathOpts) return;
    for (let item of bedOpts.children) {
      if (item.getAttribute("value") === bedbathValue.beds)
        item.classList.add("activeTypeBed");
    }
    for (let item of bathOpts.children) {
      if (item.getAttribute("value") === bedbathValue.baths)
        item.classList.add("activeTypeBath");
    }
  };

  const changeTypeBed = (e) => {
    const selected = e.target,
      active = document.querySelector(".activeTypeBed");
    selected.classList.add("activeTypeBed");
    if (!active) return;
    if (selected !== active) {
      active.classList.remove("activeTypeBed");
      selected.classList.add("activeTypeBed");
    }
  };

  const changeTypeBath = (e) => {
    const selected = e.target,
      active = document.querySelector(".activeTypeBath");
    selected.classList.add("activeTypeBath");
    if (!active) return;
    if (selected !== active) {
      active.classList.remove("activeTypeBath");
      selected.classList.add("activeTypeBath");
    }
  };

  return (
    <styled.Popup id="bedbathForm">
      <styled.PopUpCard onSubmit={onSubmit}>
        <p>beds</p>
        <styled.InputsWrapper2 id="bedOpts">
          <styled.Type position="left" value="0" onClick={changeTypeBed}>
            Any
          </styled.Type>
          <styled.Type value="1" onClick={changeTypeBed}>
            1+
          </styled.Type>
          <styled.Type value="2" onClick={changeTypeBed}>
            2+
          </styled.Type>
          <styled.Type value="3" onClick={changeTypeBed}>
            3+
          </styled.Type>
          <styled.Type position="right" value="4" onClick={changeTypeBed}>
            4+
          </styled.Type>
        </styled.InputsWrapper2>
        <p>baths</p>
        <styled.InputsWrapper2 id="bathOpts">
          <styled.Type position="left" value="0" onClick={changeTypeBath}>
            Any
          </styled.Type>
          <styled.Type value="1" onClick={changeTypeBath}>
            1+
          </styled.Type>
          <styled.Type value="2" onClick={changeTypeBath}>
            2+
          </styled.Type>
          <styled.Type value="3" onClick={changeTypeBath}>
            3+
          </styled.Type>
          <styled.Type position="right" value="4" onClick={changeTypeBath}>
            4+
          </styled.Type>
        </styled.InputsWrapper2>
        <Button type="submit">done</Button>
      </styled.PopUpCard>
    </styled.Popup>
  );
}

export function MorePopUp({ onSubmit }) {
  return (
    <styled.Popup>
      <styled.PopUpCard onSubmit={onSubmit}>
        <p>pets allowed</p>
        <styled.CheckboxWrapper style={{ alignSelf: "flex-start" }}>
          <input type="checkbox" value="pets_allowed" id="pets_allowed" />
          <label htmlFor="pets_allowed">Pets Allowed</label>
        </styled.CheckboxWrapper>
        <p>area in m2</p>
        <styled.InputsWrapper>
          <FilterInput placeholder="min" width="100px" />
          <styled.Dash />
          <FilterInput placeholder="max" width="100px" />
        </styled.InputsWrapper>
        <Button>done</Button>
      </styled.PopUpCard>
    </styled.Popup>
  );
}
