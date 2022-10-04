import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import { colors } from '../styles';
import SignUpWelcome from '../components/SignUpWelcome';
import styled from '@emotion/styled';

const StyledSignUpPage = styled.div`
  min-height: 100vh;
`;

const StyledHeader = styled.header`
  height: 22rem;
  background-color: ${colors.primary[100]};
`;

function SignupPage() {
  const [isShowingForm, setIsShowingForm] = useState(false);
  return (
    <StyledSignUpPage>
      <StyledHeader>
        {isShowingForm ? (
          <SignUpForm />
        ) : (
          <SignUpWelcome onClick={setIsShowingForm} />
        )}
      </StyledHeader>
    </StyledSignUpPage>
  );
}

export default SignupPage;
