import { RiUserShared2Line } from 'react-icons/ri';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 388px;
  border: 1px solid #e5e5e5;
  user-select: none;
  border-radius: 8px;
  ${boxShadow[1]}
`;

const StyledTitle = styled.h1`
  ${typography.headline[5]}
  margin: 1rem 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const StyledFormLabel = styled.label`
  ${typography.overline}
`;

const StyledFormInput = styled.input`
  border: none;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.primary[300]};

  &:focus {
    outline: 1px solid ${colors.primary[500]};
  }
`;

const StyledFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 8px 16px;
  border-radius: 16px;
  align-self: center;
  background-color: ${colors.primary[300]};
  color: white;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: ${colors.primary[400]};
  }
`;

const StyledFormError = styled.span`
  ${typography.caption}
  color: ${colors.error[500]};
`;

function LoginForm() {
  return (
    <StyledFormWrapper>
      <StyledTitle>Login</StyledTitle>
      <StyledForm>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='email'>Email</StyledFormLabel>
          <StyledFormInput
            type='email'
            id='email'
            placeholder='user@mail.com'
          />
          <StyledFormError>Error will be shown here</StyledFormError>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='password'>Password</StyledFormLabel>
          <StyledFormInput type='password' id='name' placeholder='******' />
          <StyledFormError>Error will be shown here</StyledFormError>
        </StyledFormGroup>
        <StyledFormButton type='submit'>
          <RiUserShared2Line />
          Login
        </StyledFormButton>
      </StyledForm>
    </StyledFormWrapper>
  );
}

export default LoginForm;
