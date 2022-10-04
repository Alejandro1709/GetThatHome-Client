import { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { typography } from '../styles';
import Credit from '../assets/images/credit_card.svg';
import HouseSeeking from '../assets/images/house_seeking.svg';
import SignUpCard from './SignUpCard';
import styled from '@emotion/styled';

const StyledHeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 4rem;
`;

const StyledInstructions = styled.p`
  ${typography.headline[5]}
`;

const StyledHeading = styled.h1`
  ${typography.headline[2]}
`;

const StyledHeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3.38rem;
  text-align: center;
  padding-top: 4rem;
`;

function SignUpWelcome({ onClick }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(role) {
    setSearchParams({ role });
    onClick(true);
  }

  return (
    <Fragment>
      <StyledHeaderTop>
        <StyledInstructions>
          Selecciona el perfil con el que te identificas
        </StyledInstructions>
        <StyledHeading>Que estas buscando?</StyledHeading>
      </StyledHeaderTop>
      <StyledHeaderBottom>
        <SignUpCard
          title='Landlord'
          desc='You want to rent or sell a home'
          Image={Credit}
          onClick={() => handleClick('landlord')}
        />
        <SignUpCard
          title='Home seeker'
          desc='You want to find a home'
          Image={HouseSeeking}
          onClick={() => handleClick('home-seeker')}
        />
      </StyledHeaderBottom>
    </Fragment>
  );
}

export default SignUpWelcome;
