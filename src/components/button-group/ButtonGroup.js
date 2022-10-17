import { BsChevronDown } from "react-icons/bs";
import Button from "../Button";
import { useState } from "react";
import FilterInput from "../FilterInput";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import * as styled from "./ui";
import { colors } from "../../styles";

export function ButtonGroup({ filters, setFilters }) {
  const [price, setPrice] = useState(null || "price");
  const [type, setType] = useState(null || "property type");
  const [pricePopup, setPricePopup] = useState(false);
  const [typePopUp, setTypePopUp] = useState(false);
  const [bedbathPopUp, setBedBathPopUp] = useState(false);
  const [morePopUp, setMorePopUp] = useState(false);

  const allModals = [
    [pricePopup, setPricePopup],
    [typePopUp, setTypePopUp],
    [bedbathPopUp, setBedBathPopUp],
    [morePopUp, setMorePopUp],
  ];

  const onlyOneModal = () => {
    for (const modal of allModals) {
      const fn = modal[1];
      if (modal[0]) fn(false);
    }
  };

  const submitPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.elements;
    setFilters({
      ...filters,
      price: { min: min_price.value, max: max_price.value },
    });
    setPrice(`${min_price.value} - ${max_price.value}`);
  };

  const submitType = (e) => {
    e.preventDefault();
    const elements = e.target.elements,
      showHouses = elements[0].checked,
      showApartments = elements[1].checked;
    setFilters({
      ...filters,
      type: { apartments: showApartments, houses: showHouses },
    });
    if (showHouses) setType("houses");
    if (showApartments) setType("apartments");
    if (showHouses && showApartments) setType("houses & apartments");
  };

  const submitBedBaths = (e) => {
    e.preventDefault();
    const activeBed = document.querySelector(".activeTypeBed"),
      activeBath = document.querySelector(".activeTypeBath");
    let beds = 0,
      baths = 0;
    if (activeBed) {
      beds = activeBed.getAttribute("value");
      if (beds === "any") beds = 0;
    }
    if (activeBath) {
      baths = activeBath.getAttribute("value");
      if (baths === "any") baths = 0;
    }
    setFilters({
      ...filters,
      ambients: { beds: beds, baths: baths },
    });
  };

  const submitMore = (e) => {
    e.preventDefault();
    const elements = e.target.elements,
      showPets = elements[0].checked;
    setFilters({
      ...filters,
      pets: showPets,
      area: { min: elements[1].value, max: elements[2].value },
    });
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
    <styled.StyledButtonGroup>
      <Button
        onClick={() => {
          !pricePopup ? setPricePopup(true) : setPricePopup(false);
          onlyOneModal();
        }}
      >
        {price}
      </Button>
      {pricePopup && (
        <styled.PricePopUp>
          <styled.PopUpCard onSubmit={submitPrice}>
            <p>salary range</p>
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
        </styled.PricePopUp>
      )}
      <Button
        onClick={() => {
          !typePopUp ? setTypePopUp(true) : setTypePopUp(false);
          onlyOneModal();
        }}
      >
        {type}
      </Button>
      {typePopUp && (
        <styled.TypePopUp>
          <styled.PopUpCard onSubmit={submitType}>
            <p>property type</p>
            <styled.InputsWrapper>
              <styled.CheckboxWrapper>
                <input type="checkbox" value="houses" id="houses" />
                <label htmlFor="houses">Houses</label>
              </styled.CheckboxWrapper>
              <styled.CheckboxWrapper>
                <input type="checkbox" value="apartments" id="apartments" />
                <label htmlFor="apartments">Apartments</label>
              </styled.CheckboxWrapper>
            </styled.InputsWrapper>
            <Button type="submit">done</Button>
          </styled.PopUpCard>
        </styled.TypePopUp>
      )}
      <Button
        onClick={() => {
          !bedbathPopUp ? setBedBathPopUp(true) : setBedBathPopUp(false);
          onlyOneModal();
        }}
      >
        Beds and baths
      </Button>
      {bedbathPopUp && (
        <styled.BedBathPopUp>
          <styled.PopUpCard onSubmit={submitBedBaths}>
            <p>beds</p>
            <styled.InputsWrapper2>
              <styled.Type position="left" value="any" onClick={changeTypeBed}>
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
            <styled.InputsWrapper2>
              <styled.Type position="left" value="any" onClick={changeTypeBath}>
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
        </styled.BedBathPopUp>
      )}
      <Button
        hasIcon
        Icon={BsChevronDown}
        onClick={() => {
          !morePopUp ? setMorePopUp(true) : setMorePopUp(false);
          onlyOneModal();
        }}
      >
        More
      </Button>
      {morePopUp && (
        <styled.MorePopUp>
          <styled.PopUpCard onSubmit={submitMore}>
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
        </styled.MorePopUp>
      )}
    </styled.StyledButtonGroup>
  );
}
