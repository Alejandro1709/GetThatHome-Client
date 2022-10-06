import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../styles';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';
import Input from './Input';

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

const WhereingTipe = styled.input`
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
  cursor: pointer;
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
  const [formData, setFormData] = useState({
    looking: 'apartment',
    wanting: 'rent',
    location: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/properties', { state: formData });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Looking>
        <Frase>I’m Looking for</Frase>
        <LookingTipe
          name='looking'
          onChange={handleChange}
          value={formData.looking}
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
          onChange={handleChange}
          value={formData.wanting}
        >
          <option value='rent'>Rent</option>
          <option value='sell'>Sell</option>
        </LookingTipe>
      </Looking>
      <Line />
      <Looking>
        <Frase>Where</Frase>
        <WhereingTipe
          name='location'
          placeholder='Favorite district'
          value={formData.location}
          onChange={handleChange}
        />
      </Looking>
      <Line />
      <Search type='submit'>Search</Search>
    </Form>
  );
}

export default SearchForm;
