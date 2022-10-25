import { useState } from "react";
import SelectInput from "./SelectInput";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGroup } from "./button-group/ButtonGroup";
import InputContainer from "./InputPlaceAutocomplete";
import { PlacesAutocompletion } from "./PlacesAutocompletion";

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

function SorteableBar({ filters, setFilters,isMapReady }) {
  const [query, setQuery] = useState({
    whereing: "",
    coordinates: {
      lat: "",
      lng: "",
    },
  });

  function changeLocation({ whereing, coordinates }) {
    setQuery({ whereing, coordinates });
    const { lat, lng } = coordinates
    setFilters({...filters, address: {latitude: lat,longitude: lng}});
  }

  return (
    <StyledSorteableBarTop>
     { isMapReady && <InputContainer leftIcon={<MagnifyingGlass/>}>
        <PlacesAutocompletion {...{ location: query, changeLocation, placeholder:"Search by address" }} />
      </InputContainer>}

      <ButtonGroup filters={filters} setFilters={setFilters} />
      <SelectInput filters={filters} setFilters={setFilters} />
    </StyledSorteableBarTop>
  );
}

export default SorteableBar;
