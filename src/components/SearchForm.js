import { useNavigate } from "react-router-dom";
import { colors, typography } from "../styles";
import { boxShadow } from "../styles/utils";
import styled from "@emotion/styled";
import { useProperties } from "../context/properties-context";
import { PlacesAutocompletion } from "./PlacesAutocompletion";
import { useEffect } from "react";
import { isVowel } from "../utils";

const Form = styled.form`
  display: flex;
  background: ${colors.secondary[200]};
  border-radius: 8px;

  ${boxShadow[1]};
`;

const Looking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem 1rem;
  min-width: fit-content;
`;

const LookingType = styled.select`
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  ${typography.body[1]};
  color: ${colors.secondary[700]};
`;

const Search = styled.button`
  ${typography.button};
  background: ${colors.primary[300]};
  border-radius: 16px;
  border: 1px solid ${colors.primary[300]};
  color: ${colors.secondary[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[400]};
  }
`;

const Frase = styled.span`
  color: ${colors.secondary[600]};
  padding-left: 0.5rem;
  ${typography.overline};
  word-break: break-all;
`;

const Line = styled.div`
  width: 2.5rem;
  height: 0;
  border: 1px solid #e1e2e1;
  transform: rotate(90deg);
  margin: 2rem 0;
`;

function SearchForm({ isMapReady }) {
  const navigate = useNavigate();
  const { propertyTypes, preferences, changePreferences } = useProperties();

  function changeLocation({
    whereing = preferences.location.whereing,
    coordinates = preferences.location.coordinates,
  }) {
    changePreferences({
      ...preferences,
      location: {
        whereing,
        coordinates,
      },
    });
  }
  useEffect(()=>{console.log(propertyTypes)},[propertyTypes])
  function handleSubmit(e) {
    e.preventDefault();
    console.log(preferences);
    navigate("/properties");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Looking>
        <Frase>I’m Looking for</Frase>

        <LookingType
          name="looking"
          value={preferences.looking}
          onChange={(e) =>
            changePreferences({ ...preferences, looking: e.target.value })
          }
        >
          {propertyTypes.map((type) => {
            const article = isVowel(type.name[0]) ? "An " : "A ";
            return (
              <option key={type.id} value={type.name}>
                {article + type.name}
              </option>
            );
          })}
          <option value="all">All</option>
        </LookingType>
      </Looking>
      <Line />
      <Looking>
        <Frase>I’m Want to</Frase>

        <LookingType
          name="wanting"
          value={preferences.wanting}
          onChange={(e) =>
            changePreferences({ ...preferences, wanting: e.target.value })
          }
        >
          <option value="rent">Rent</option>
          <option value="sale">Buy</option>
          <option value="all">I don´t know yet</option>
        </LookingType>
      </Looking>
      <Line />
      <Looking>
        <Frase>WHERE</Frase>
        {isMapReady && (
          <PlacesAutocompletion
            {...{
              location: preferences.location,
              changeLocation,
            }}
          />
        )}
      </Looking>
      <Line />
      <Search type="submit">Search</Search>
    </Form>
  );
}

export default SearchForm;
