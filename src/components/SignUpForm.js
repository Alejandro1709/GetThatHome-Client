import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DotWave } from '@uiball/loaders';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';
import { createUser } from '../services/users-service';

const StyledFormWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  max-width: 388px;
  border: 1px solid #e5e5e5;
  background-color: white;
  user-select: none;
  top: 50%;
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
  border: none;
  padding: 8px 16px;
  border-radius: 16px;
  align-self: center;
  background-color: ${colors.primary[300]};
  color: white;
  cursor: pointer;
  width: 177px;

  &:hover {
    background-color: ${colors.primary[400]};
  }
`;

const StyledFormError = styled.span`
  ${typography.caption}
  color: ${colors.error[500]};
`;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const role = searchParams.get('role');
    const { passwordConfirm, ...user } = formData;

    if (user.password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    createUser({ ...user, role })
      .then((data) => {
        setLoading(false);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <StyledFormWrapper>
      <StyledTitle>Create your account</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='name'>Name</StyledFormLabel>
          <StyledFormInput
            name='name'
            type='text'
            id='name'
            placeholder='John Doe'
            required
            value={formData.name}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='email'>Email</StyledFormLabel>
          <StyledFormInput
            name='email'
            type='email'
            id='email'
            placeholder='user@mail.com'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='phone'>Phone</StyledFormLabel>
          <StyledFormInput
            name='phone'
            type='text'
            id='phone'
            placeholder='999-999-999'
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='password'>Password</StyledFormLabel>
          <StyledFormInput
            name='password'
            type='password'
            id='password'
            placeholder='******'
            minLength={6}
            required
            value={formData.password}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor='password-confirm'>
            Password Confirmation
          </StyledFormLabel>
          <StyledFormInput
            name='passwordConfirm'
            type='password'
            id='password-confirm'
            placeholder='******'
            required
            minLength={6}
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
          {error && <StyledFormError>{error}</StyledFormError>}
        </StyledFormGroup>
        {loading && (
          <StyledLoading>
            <DotWave size={47} speed={1} color='#F48FB1' />
          </StyledLoading>
        )}
        <StyledFormButton type='submit'>Create Account</StyledFormButton>
      </StyledForm>
    </StyledFormWrapper>
  );
}

export default SignUpForm;
