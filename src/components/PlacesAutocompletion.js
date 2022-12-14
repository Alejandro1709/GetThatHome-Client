import styled from "@emotion/styled";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { colors, typography } from "../styles";
import { boxShadow } from "../styles/utils";

const SearchInput = styled.div`
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${typography.body[1]};
  color: ${colors.secondary[700]};
  width: inherit;
  border-radius: 0.5rem;
`;

const LookingTypeSearch = styled.input`
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  outline: none;
  ${typography.body[1]};
  color: ${colors.secondary[700]};
  background-color: rgba(255, 255, 255, 0.5);
  width: inherit;
`;
const ResultBox = styled.div`
  position: absolute;
  top: 90%;
  left:0;
  max-width: 17.5rem;
  z-index: 99;
  height: 10rem;
  background-color: white;
  text-align: left;
  cursor: pointer;
  overflow: scroll;
  ${boxShadow[1]};
`;

const ResultItem = styled.div`
  padding: 8px;

  &:hover {
    background-color: ${colors.primary[100]};
  }
`;
export function PlacesAutocompletion({
  location,
  changeLocation,
  placeholder,
}) {
  async function handleSelect(value) {
    const result = (await geocodeByAddress(value))[0];
    const coordinates = await getLatLng(result);
    const whereing = result.formatted_address;
    changeLocation({ coordinates, whereing });
  }

  function handleChange(value) {
    const whereing = value;
    const coordinates = { lat: "", long: "" };
    changeLocation({ coordinates, whereing });
  }

  return (
    <PlacesAutocomplete
      value={location.whereing}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <SearchInput>
          <LookingTypeSearch
            {...getInputProps({
              placeholder: placeholder || "Type address...",
            })}
          />

          {(suggestions.length > 0 || loading) && (
            <ResultBox>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion, index) => {
                return (
                  <ResultItem
                    key={index}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    {suggestion.description}
                  </ResultItem>
                );
              })}
            </ResultBox>
          )}
        </SearchInput>
      )}
    </PlacesAutocomplete>
  );
}
