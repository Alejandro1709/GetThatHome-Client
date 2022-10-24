import { BsChevronDown } from "react-icons/bs";
import Button from "../Button";
import { useState } from "react";
import * as styled from "./ui";
import Modal from "../Modal";
import { BedBathPopUp, MorePopUp, PricePopUp, TypePopUp } from "./button-types";

export function ButtonGroup({ filters, setFilters }) {
  const [price, setPrice] = useState(null || "price");
  const [type, setType] = useState(null || "property type");
  const [pricePopup, setPricePopup] = useState(false);
  const [typePopUp, setTypePopUp] = useState(false);
  const [bedbathPopUp, setBedBathPopUp] = useState(false);
  const [morePopUp, setMorePopUp] = useState(false);

  const submitPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.elements;
    let minValue = min_price.value,
      maxValue = max_price.value;
    setFilters({
      ...filters,
      price: { min: minValue, max: maxValue },
    });
    if (minValue === "") minValue = 0;
    if (maxValue === "") maxValue = 0;
    if (minValue === 0 && maxValue === 0) {
      setPricePopup(false);
      return;
    }
    setPrice(`${minValue} - ${maxValue}`);
    setPricePopup(false);
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

  return (
    <styled.StyledButtonGroup id="buttongroup">
      <Button
        onClick={() => {
          setPricePopup(!pricePopup);
        }}
      >
        {price}
      </Button>
      {pricePopup && (
        <Modal
          onModalClose={(e) => {
            if (e.target.dataset.type === "modal") setPricePopup(false);
          }}
        >
          <PricePopUp onSubmit={submitPrice} />
        </Modal>
      )}
      <Button
        onClick={() => {
          setTypePopUp(!typePopUp);
        }}
      >
        {type}
      </Button>
      {typePopUp && (
        <Modal
          onModalClose={(e) => {
            if (e.target.dataset.type === "modal") setTypePopUp(false);
          }}
        >
          <TypePopUp onSubmit={submitType} />
        </Modal>
      )}
      <Button
        onClick={() => {
          setBedBathPopUp(!bedbathPopUp);
        }}
      >
        Beds and baths
      </Button>
      {bedbathPopUp && (
        <Modal
          onModalClose={(e) => {
            if (e.target.dataset.type === "modal") setBedBathPopUp(false);
          }}
        >
          <BedBathPopUp onSubmit={submitBedBaths} />
        </Modal>
      )}
      <Button
        hasIcon
        Icon={BsChevronDown}
        onClick={() => {
          setMorePopUp(!morePopUp);
        }}
      >
        More
      </Button>
      {morePopUp && (
        <Modal
          onModalClose={(e) => {
            if (e.target.dataset.type === "modal") setMorePopUp(false);
          }}
        >
          <MorePopUp onSubmit={submitMore} />
        </Modal>
      )}
    </styled.StyledButtonGroup>
  );
}
