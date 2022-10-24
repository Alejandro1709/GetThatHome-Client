import { useState } from 'react';
import FilterInput from './FilterInput';
import SelectInput from './SelectInput';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { ButtonGroup } from './button-group/ButtonGroup';
import { filterByPlace } from './button-group/utils';

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

function SorteableBar({ filters, setFilters, propsByPreferences }) {
  const [query, setQuery] = useState('');

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log('searching for', query);
    const places = filterByPlace(propsByPreferences, query);
    console.log('search returned', places);
    setFilters((prev) => ({ ...prev, place: places }));
  }

  return (
    <StyledSorteableBarTop>
      <FilterInput
        onSubmit={handleSearch}
        placeholder='Search by address...'
        hasLeftIcon={<MagnifyingGlass />}
        value={query}
        onChange={handleChangeQuery}
      />
      <ButtonGroup filters={filters} setFilters={setFilters} />
      <SelectInput filters={filters} setFilters={setFilters} />
    </StyledSorteableBarTop>
  );
}

export default SorteableBar;
