import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { colors, typography } from '../styles';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';
import { useProperties } from '../context/properties-context';
import { PlacesAutocompletion } from './PlacesAutocompletion';

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
  const [looking, setLooking] = useState("aparment");
  const [wanting, setWanting] = useState("rent");
  const [whereing, setWhereing] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const navigate = useNavigate();
  const {changePreferences}= useProperties()
  
  async function handleSelect(value) {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setWhereing(value);
    setCoordinates(latLng);
  }

  function handleSubmit(e) {
    e.preventDefault();
    changePreferences({ looking, wanting, location: { whereing, coordinates } })
    navigate('/properties');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Looking>
        <Frase>I’m Looking for</Frase>

        <LookingType
          name='looking'
          value={looking}
          onChange={(e) => setLooking(e.target.value)}
        >
          <option value='aparment'>An Apartment</option>
          <option value='house'>A House</option>
        </LookingType>

      </Looking>
      <Line />
      <Looking>
        <Frase>I’m Want to</Frase>

        <LookingType
          name='wanting'
          value={wanting}
          onChange={(e) => setWanting(e.target.value)}
        >
          <option value='rent'>Rent</option>
          <option value='sale'>Buy</option>
        </LookingType>

      </Looking>
      <Line />
      <Looking>
        <Frase>WHERE</Frase>
        {isMapReady && (
          <PlacesAutocompletion {...{whereing, setWhereing, handleSelect}}/>
        )}
      </Looking>
      <Line />
      <Search type="submit">Search</Search>
    </Form>
  );
}

export default SearchForm;
