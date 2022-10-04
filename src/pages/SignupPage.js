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
  return (
    <StyledSignUpPage>
      <StyledHeader>
        <SignUpWelcome />
      </StyledHeader>
    </StyledSignUpPage>
  );
}

export default SignupPage;
