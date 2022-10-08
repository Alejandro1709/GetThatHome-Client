import styled from "@emotion/styled";
import PlacesAutocomplete from "react-places-autocomplete";
import { colors, typography } from "../styles";
import { boxShadow } from "../styles/utils";

const SearchInput = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  ${typography.body[1]};
  color: ${colors.secondary[700]};
`;

const LookingTypeSearch = styled.input`
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  ${typography.body[1]};
  color: ${colors.secondary[700]};
`;
const ResultBox = styled.div`
  position: absolute;
  top: 40px;
  max-width: 280px;
  height: 164px;
  background-color: white;
  border-radius: 8px;
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
export function PlacesAutocompletion({whereing,setWhereing,handleSelect}) {
  return (
    <PlacesAutocomplete
      value={whereing}
      onChange={setWhereing}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <SearchInput>
          <LookingTypeSearch
            {...getInputProps({ placeholder: "Type address..." })}
          />

          <ResultBox>
            {loading ? <div>...loading</div> : null}

            {suggestions.map((suggestion, index) => {
              return (
                <ResultItem key={index} {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </ResultItem>
              );
            })}
          </ResultBox>
        </SearchInput>
      )}
    </PlacesAutocomplete>
  );
}
