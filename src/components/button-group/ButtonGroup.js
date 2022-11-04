import { BsChevronDown } from "react-icons/bs";
import Button from "../Button";
import { useState } from "react";
import * as styled from "./ui";
import { BedBathPopUp, MorePopUp, PricePopUp, TypePopUp } from "./button-types";
import { useComponentVisible } from "../../hooks";
import { useProperties } from "../../context/properties-context";

export function ButtonGroup({ filters, setFilters }) {
  const { preferences, changePreferences } = useProperties();
  const [price, setPrice] = useState("price");
  const [type, setType] = useState("property type");
  const [priceRef, pricePopup, setPricePopup] = useComponentVisible(false);
  const [typeRef, typePopup, setTypePopup] = useComponentVisible(false);
  const [bedbathValue, setbedbathValue] = useState(null);
  const [bedbathRef, bedbathPopup, setBedBathPopup] =
    useComponentVisible(false);
  const [moreRef, morePopUp, setMorePopUp] = useComponentVisible(false);

  const submitPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.elements;
    let minValue = min_price.value,
      maxValue = max_price.value;
    if (minValue === "") minValue = 0;
    if (maxValue === "") maxValue = Infinity;
    setFilters({
      ...filters,
      price: { min: minValue, max: maxValue },
    });

    if (minValue === 0 && maxValue === Infinity) {
      setPrice(`PRICE`);
    } else if (minValue === 0 && maxValue !== Infinity) {
      setPrice(`<${maxValue}`);
    } else if (minValue !== 0 && maxValue === Infinity) {
      setPrice(`${minValue}<`);
    } else {
      setPrice(`${minValue} - ${maxValue}`);
    }

    setPricePopup(false);
  };

  const submitType = (e) => {
    e.preventDefault();
    const elements = e.target.elements,
      showHouses = elements[0].checked,
      showApartments = elements[1].checked;

    setTypePopup(false);
    if (showHouses && !showApartments) {
      changePreferences({ ...preferences, looking: "House" });
      return setType("houses");
    }
    if (showApartments && !showHouses) {
      changePreferences({ ...preferences, looking: "Apartment" });
      return setType("apartments");
    }
    changePreferences({ ...preferences, looking: "all" });
    setType("Property type");
  };

  const submitBedBaths = (e) => {
    e.preventDefault();
    const activeBed = document.querySelector(".activeTypeBed"),
      activeBath = document.querySelector(".activeTypeBath");
    let beds = 0,
      baths = 0;
    if (activeBed) {
      beds = activeBed.getAttribute("value");
    }
    if (activeBath) {
      baths = activeBath.getAttribute("value");
    }
    const selected = { beds: beds, baths: baths };
    setbedbathValue(selected);
    setFilters({
      ...filters,
      ambients: selected,
    });
    setBedBathPopup(false);
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
    setMorePopUp(false);
  };

  return (
    <styled.ButtonGroup id="buttongroup">
      <styled.ButtonContainer ref={priceRef}>
        <Button
          onClick={() => {
            setPricePopup(!pricePopup);
          }}
        >
          {price}
        </Button>
        {pricePopup && <PricePopUp onSubmit={submitPrice} />}
      </styled.ButtonContainer>

      <styled.ButtonContainer ref={typeRef}>
        <Button
          onClick={() => {
            setTypePopup(!typePopup);
          }}
        >
          {type}
        </Button>
        {typePopup && <TypePopUp onSubmit={submitType} type={type} />}
      </styled.ButtonContainer>

      <styled.ButtonContainer ref={bedbathRef}>
        <Button
          onClick={() => {
            setBedBathPopup(!bedbathPopup);
          }}
        >
          Beds and baths
        </Button>
        {bedbathPopup && (
          <BedBathPopUp onSubmit={submitBedBaths} bedbathValue={bedbathValue} />
        )}
      </styled.ButtonContainer>

      <styled.ButtonContainer ref={moreRef}>
        <Button
          hasIcon
          Icon={BsChevronDown}
          onClick={() => {
            setMorePopUp(!morePopUp);
          }}
        >
          More
        </Button>
        {morePopUp && <MorePopUp onSubmit={submitMore} />}
      </styled.ButtonContainer>
    </styled.ButtonGroup>
  );
}
