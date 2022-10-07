import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../styles';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';

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

const LookingTipe = styled.select`
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

function SearchForm() {
  const [looking, setLooking] = useState('apartment');
  const [wanting, setWanting] = useState('rent');
  const [whereing, setWhereing] = useState('New York');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/properties', { state: { looking, wanting, whereing } });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Looking>
        <Frase>I’m Looking for</Frase>
        <LookingTipe
          name='looking'
          value={looking}
          onChange={(e) => setLooking(e.target.value)}
        >
          <option value='apartment'>An Apartment</option>
          <option value='house'>A House</option>
        </LookingTipe>
      </Looking>
      <Line />
      <Looking>
        <Frase>I’m Want to</Frase>
        <LookingTipe
          name='wanting'
          value={wanting}
          onChange={(e) => setWanting(e.target.value)}
        >
          <option value='rent'>Rent</option>
          <option value='sell'>Sell</option>
        </LookingTipe>
      </Looking>
      <Line />
      <Looking>
        <Frase>I’m Looking for</Frase>
        <LookingTipe name='select'>
          <option selected disabled hidden>
            {' '}
            Favorite district
          </option>
          <option value='apartment'>An Apartment</option>
          <option value='house'>A House</option>
        </LookingTipe>
      </Looking>
      <Line />
      <Search type='submit'>Search</Search>
    </Form>
  );
}

export default SearchForm;
