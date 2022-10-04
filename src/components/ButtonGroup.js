import { BsChevronDown } from 'react-icons/bs';
import Button from './Button';
import styled from '@emotion/styled';

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

function ButtonGroup() {
  return (
    <StyledButtonGroup>
      <Button>Price</Button>
      <Button>Property type</Button>
      <Button>Beds and baths</Button>
      <Button hasIcon Icon={BsChevronDown}>
        More
      </Button>
    </StyledButtonGroup>
  );
}

export default ButtonGroup;
