import styled from "@emotion/styled";
import { colors } from "../styles";
import { fonts, typography } from "../styles/typography";

const ContainerHero = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  background: ${colors.primary[100]};
`;

const Spam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.primary};
  ${typography.headline[4]};
  width: 51.4rem;
  text-align: center;
`;

const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
`;

const CreateAccount = styled.button`
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
  width: 16.5rem;
`;

function SignUpHero() {
  return (
    <ContainerHero>
      <CreateAccountContainer>
        <Spam>
          Getting someone to rent your apartment has never been this easy
        </Spam>
        <CreateAccount>Create an account now</CreateAccount>
      </CreateAccountContainer>
    </ContainerHero>
  );
}

export default SignUpHero;
